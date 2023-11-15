import {SporifyArtist, SpotifyAlbum} from "../routes/types/types";
import axios, {AxiosResponse} from 'axios';
import {getAccessToken} from './authService';

export const USER_NOT_FOUND_ERR = 'User not found';
const api_url = process.env.SPOTIFY_API_URL;

async function searchArtist(artistName: string): Promise<SporifyArtist> {
    const accessToken = getAccessToken();
    const response: AxiosResponse<SporifyArtist> = await axios.get(`${api_url}/search`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        params: {
            q: artistName,
            type: 'artist',
        },
    });
    return response.data;
}

async function getArtistAlbums(artistId: string, artistName: string): Promise<SpotifyAlbum> {
  const accessToken = getAccessToken();
    const response: AxiosResponse<SpotifyAlbum> = await axios.get(`${api_url}/artists/${artistId}/albums?limit=12`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

   return response.data;
}

  export default {
    searchArtist,
    getArtistAlbums
  } as const;
