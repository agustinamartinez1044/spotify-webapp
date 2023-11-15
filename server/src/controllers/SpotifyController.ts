import {IReq, IRes} from '../routes/types/types';
import SpotifyService from '../services/SpotifyService';
import HttpStatusCodes from '../constants/HttpStatusCodes';
import {NextFunction, Request, Response} from 'express';

async function getAlbumData(req: Request, res: Response, next: NextFunction) {
    const artistName = req.query.artistName as string;

    if (!artistName) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({error: "Artist name is required"});
    }

    try {
        const searchResult = await SpotifyService.searchArtist(artistName);
        if (searchResult.artists.items.length === 0) {
            return res.status(HttpStatusCodes.NOT_FOUND).json({error: "Artist not found"});
        }

        const artist = searchResult.artists.items[0];

        res.json(artist);
    } catch (error) {
    }
}


function searchAlbum(req: IReq, res: IRes) {
    try {
        const artistId = req.params.id;
        if (!artistId) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({error: 'Artist ID is required'});
        }
        const albums = SpotifyService.getArtistAlbums(artistId, '');
        res.json(albums);
    } catch (error) {
    }
}

export default {
    searchAlbum,
    getAlbumData
} as const;
