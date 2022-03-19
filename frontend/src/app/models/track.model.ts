import { Album } from './album.model';
import { Artist } from './artist.model';

export interface Track {
  _id: string,
  title: string,
  album: Album,
  duration: string,
}

export interface TracksData {
  artist: Artist,
  album: Album,
  tracks: Track[],
}

export interface ApiHistoryData {
  token: undefined | string,
  track: undefined | string,
}

export interface TrackHistory {
  _id: string,
  user: string,
  track: Track,
  datetime: string,
}
