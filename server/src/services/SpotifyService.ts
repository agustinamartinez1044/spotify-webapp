import {SporifyArtist, SpotifyAlbum} from "@src/routes/types/types";

export const USER_NOT_FOUND_ERR = 'User not found';

function searchArtist(artistName: string): Promise<SporifyArtist> {
  return Promise.resolve();
}

function getArtistAlbums(artistId: string, artistName: string): Promise<SpotifyAlbum> {
  return Promise.resolve();
}

  export default {
    searchArtist,
    getArtistAlbums
  } as const;
