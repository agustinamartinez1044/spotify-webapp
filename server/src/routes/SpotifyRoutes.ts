import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import UserService from '@src/services/UserService';
import {IUser} from '@src/models/User';
import {IReq, IRes} from './types/express/misc';


// **** Functions **** //

async function searchArtist(_: IReq, res: IRes) {
}

async function getAlbumData(req: IReq<{ user: IUser }>, res: IRes) {
}

// **** Export default **** //

export default {
  searchArtist,
  getAlbumData
} as const;
