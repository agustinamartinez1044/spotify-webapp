import { Router } from 'express';
import jetValidator from 'jet-validator';
import SpotifyRoutes from './SpotifyRoutes';

import Paths from '../constants/Paths';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// ** Add UserRouter ** //

const spotifyRouter = Router();


spotifyRouter.get(
  Paths.Artist.Search,
    SpotifyRoutes.searchArtist,
);

spotifyRouter.get(
    Paths.Album.Get,
    SpotifyRoutes.getAlbumData
);


apiRouter.use(Paths.Artist.Base, spotifyRouter);


// **** Export default **** //

export default apiRouter;
