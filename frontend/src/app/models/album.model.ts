import { Artist } from './artist.model';

export interface Album {
  _id: string,
  artist: Artist,
  title: string,
  releaseDate: string,
  image: string,
}

export interface AlbumData {
  [key: string]: any,
  artist: string,
  title: string,
  releaseDate: string,
  image: File,
}
