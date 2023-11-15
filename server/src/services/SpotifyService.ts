import {SporifyArtist, SporifyArtistResponse, SpotifyAlbum} from "../routes/types/types";
import axios, {AxiosResponse} from 'axios';
import {getAccessToken} from './authService';

export const USER_NOT_FOUND_ERR = 'User not found';
const api_url = process.env.SPOTIFY_API_URL;

async function searchArtist(artistName: string): Promise<SporifyArtist> {
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
    const artist: SporifyArtist = {
        id: artistData.id,
        name: artistData.name
    };

    return artist;
}

async function getArtistAlbums(artistId: string, artistName: string): Promise<SpotifyAlbum[]> {

    const accessToken = await getAccessToken();

    const response: AxiosResponse<{
        items: any[]
    }> = await axios.get(`${api_url}/artists/${artistId}/albums?limit=12`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (response.data.items.length === 0) {
        throw new Error('Albums not found');
    }

    return response.data.items;
}

  export default {
    searchArtist,
    getArtistAlbums
  } as const;
