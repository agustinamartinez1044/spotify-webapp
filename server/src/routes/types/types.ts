import * as e from 'express';
import {Query} from 'express-serve-static-core';

// **** Express **** //

export interface IReq<T = void> extends e.Request {
  body: T;
}

export interface IReqQuery<T extends Query, U = void> extends e.Request {
  query: T;
  body: U;
}

export interface SpotifyAlbum {
  id: string;
  name: string;
  release_date: string;
  total_tracks: number;
  image: string;
  popularity: number;
  artistName?: string;
}

export interface SporifyArtistResponse {
  artists: {
    items: {
      id: string;
      name: string;
    }[];
  }
}

export interface SporifyArtist {
  id: string;
  name: string;
}

export interface IRes extends e.Response {}
