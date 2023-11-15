import UserRepo from '@src/repos/UserRepo';
import { IUser } from '@src/models/User';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

export const USER_NOT_FOUND_ERR = 'User not found';

function searchArtist(): Promise<void> {
  return Promise.resolve();
}

function getArtistAlbums(): Promise<void> {
  return Promise.resolve();
}

  export default {
    searchArtist,
    getArtistAlbums
  } as const;
