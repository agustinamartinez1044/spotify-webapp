import SpotifyService from '../services/SpotifyService';

async function getArtistAlbumsData(artistName: string) {
    const searchResult = await SpotifyService.searchArtist(artistName);

    if (searchResult.artists.items.length === 0) {
        throw new Error("Artist not found");
    }

    try {
        const artist = searchResult.artists.items[0];
        const albums = await SpotifyService.getArtistAlbums(artist.id, artist.name);
        return albums;
    } catch (error) {
        throw new Error(error);
    }
}

async function searchAlbum(artistId: string) {
    try{
        const albums = await SpotifyService.getArtistAlbums(artistId, '');
        return albums;
    } catch (error) {
        throw new Error(error);
    }
}

export default {
    searchAlbum,
    getArtistAlbumsData
} as const;
