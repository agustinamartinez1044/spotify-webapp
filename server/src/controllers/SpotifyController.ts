import SpotifyService from '../services/SpotifyService';
import {SpotifyAlbum} from "../routes/types/types";

async function getArtistAlbumsData(artistName: string): Promise<SpotifyAlbum[]> {

    const searchResult = await SpotifyService.searchArtist(artistName);

    const albums = await SpotifyService.getArtistAlbums(searchResult.id, searchResult.name);

    return albums;
}

async function searchAlbum(artistId: string) {

    const albums = await SpotifyService.getArtistAlbums(artistId, '');

    return albums;
}

export default {
    searchAlbum,
    getArtistAlbumsData
} as const;
