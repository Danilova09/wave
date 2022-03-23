import { Artist } from './artist.model';

export interface Album {
  _id: string,
  artist: Artist,
  title: string,
  releaseDate: string,
  image: string,
  isPublished: boolean,
}

export interface ApiAlbum {
  _id: string,
  artist: string,
  title: string,
  releaseDate: string,
  image: string,
  isPublished: boolean,
}

export interface AlbumData {
  [key: string]: any,
  artist: string,
  title: string,
  releaseDate: string,
  image: File,
}
