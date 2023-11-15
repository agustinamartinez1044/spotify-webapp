import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import SpotifyService from '@src/services/SpotifyService';
import {IUser} from '@src/models/User';
import {IReq, IRes} from '../routes/types/types';

// **** Functions **** //

async function searchArtist(_: IReq, res: IRes) {
}

async function getArtistAlbums(req: IReq<{ user: IUser }>, res: IRes) {
}

// **** Export default **** //

export default {
  searchArtist,
  getArtistAlbums
} as const;
