import { Router } from 'express';
import jetValidator from 'jet-validator';
import SpotifyRoutes from './SpotifyRoutes';
import { requestLogger } from '../middleware/requestLogger';

import Paths from '../constants/Paths';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// ** Add UserRouter ** //

const spotifyRouter = Router();


spotifyRouter.get(
  Paths.Artist.Search,
    requestLogger,
    SpotifyRoutes.getArtistAlbums
);

spotifyRouter.get(
    Paths.Album.Get,
    SpotifyRoutes.getAlbumsByArtistId
);


apiRouter.use(Paths.Artist.Base, spotifyRouter);


// **** Export default **** //

export default apiRouter;
