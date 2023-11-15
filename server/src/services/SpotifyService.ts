import {SporifyArtist, SporifyArtistResponse, SpotifyAlbum, SpotifyAlbumResponse} from "../routes/types/types";
import axios, {AxiosResponse} from 'axios';
import {getAccessToken} from './authService';

export const USER_NOT_FOUND_ERR = 'User not found';
const api_url = process.env.SPOTIFY_API_URL;

async function searchArtist(artistName: string): Promise<SporifyArtist> {
    try {
        const accessToken = await getAccessToken();
        const response: AxiosResponse<SporifyArtistResponse> = await axios.get(`${api_url}/search`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                q: artistName,
                type: 'artist',
            },
        });

        if (response.data.artists.items.length === 0) {
            throw new Error(USER_NOT_FOUND_ERR);
        }

        const artistData = response.data.artists.items[0];
        return {
            id: artistData.id,
            name: artistData.name
        };
    } catch (error) {
        throw error;
    }
}

async function getArtistAlbums(artistId: string, artistName: string): Promise<SpotifyAlbum[]> {
    try {
        const accessToken = await getAccessToken();
        const response: AxiosResponse<{
            items: SpotifyAlbumResponse[]
        }> = await axios.get(`${api_url}/artists/${artistId}/albums?limit=12`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (response.data.items.length === 0) {
            throw new Error('Albums not found');
        }

        const albumPopularityPromises = response.data.items.map(async (item) => ({
            id: item.id,
            name: item.name,
            release_date: item.release_date,
            total_tracks: item.total_tracks,
            image: item.images[0].url,
            popularity: await getAlbumPopularity(item.id),
            artistName: artistName
        }));

        return await Promise.all(albumPopularityPromises);
    } catch (error) {
        throw error;
    }
}

async function getAlbumPopularity(albumId: string): Promise<number> {
    try {
        const accessToken = await getAccessToken();

        const response: AxiosResponse = await axios.get(`${api_url}/albums/${albumId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data.popularity || 0;
    } catch (error) {
        throw error;
    }
}

  export default {
    searchArtist,
    getArtistAlbums
  } as const;
