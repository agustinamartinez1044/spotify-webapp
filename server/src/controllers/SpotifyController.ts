import {IReq, IRes} from '../routes/types/types';
import SpotifyService from '../services/SpotifyService';
import HttpStatusCodes from '../constants/HttpStatusCodes';
import {NextFunction, Request, Response} from 'express';


function getAlbumData(req: Request, res: Response, next: NextFunction) {
    const artistName = req.query.artistName as string;

    if (!artistName) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({error: "Artist name is required"});
    }

    try {
    } catch (error) {
    }
}


function searchAlbum(req: IReq, res: IRes) {
    try {
    } catch (error) {
    }
}

export default {
    searchAlbum,
    getAlbumData
} as const;
