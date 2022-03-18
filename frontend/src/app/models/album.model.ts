import { Artist } from './artist.model';

export interface Album {
  _id: string,
  title: string,
  artist: Artist,
  releaseDate: string,
  image: string,
}
