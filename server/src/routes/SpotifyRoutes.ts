import {NextFunction} from 'express';
import HttpStatusCodes from '../constants/HttpStatusCodes';

import {IReq, IRes} from '../routes/types/types';
import SpotifyController from '../controllers/SpotifyController';

// **** Functions **** //

async function getArtistAlbums(req: IReq, res: IRes, next: NextFunction) {
    try {
        const artistName = req.query.artistName as string;

        if (!artistName) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({error: 'Artist name is required'});
        }

        const artist = await SpotifyController.getArtistAlbumsData(artistName);
        res.json(artist);

    } catch (error) {
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
}

async function getAlbumsByArtistId(req: IReq, res: IRes) {
    try {
        const artistId = req.params.id;

        if (!artistId) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({error: 'Artist ID is required'});
        }

        const albums = await SpotifyController.searchAlbum(artistId);
        res.json(albums);

    } catch (error) {
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
}

// **** Export default **** //

export default {
    getArtistAlbums,
    getAlbumsByArtistId
} as const;
