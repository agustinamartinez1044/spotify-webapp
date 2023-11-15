import SpotifyService from '../services/SpotifyService';

async function getArtistAlbumsData(artistName: string) {
    const searchResult = await SpotifyService.searchArtist(artistName);
    if (searchResult.artists.items.length === 0) {
        throw new Error("Artist not found");
    }
    return searchResult.artists.items[0];
}

async function searchAlbum(artistId: string) {
    return await SpotifyService.getArtistAlbums(artistId, '');
}

export default {
    searchAlbum,
    getArtistAlbumsData
} as const;
