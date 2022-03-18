import { Album } from './album.model';
import { Artist } from './artist.model';
import { User } from './user.model';

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
  token: string,
  track: string,
}

export interface TrackHistory {
  _id: string,
  user: string,
  track: Track,
  datetime: string,
}
