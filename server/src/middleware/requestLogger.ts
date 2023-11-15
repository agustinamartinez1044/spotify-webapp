import {NextFunction, Request, Response} from 'express';
import RequestLog from '../models/requestLog';

export async function requestLogger(req: Request, res: Response, next: NextFunction) {
    const artistName = req.query.artistName as string || req.params.artistId;
    const clientIp = req.ip;
    const date = new Date();
    try {
        await RequestLog.create({
            ip: clientIp,
            date: date,
            artistName: artistName ? artistName : "Unknown Artist"
        });
        next();
    } catch (error) {
        next(error);
    }

}
