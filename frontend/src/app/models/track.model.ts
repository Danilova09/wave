import { Album } from './album.model';
import { Artist } from './artist.model';

export interface Track {
  _id: string,
  title: string,
  album: Album,
  duration: string,
  isPublished: boolean,
}

export interface ApiTrack {
  _id: string,
  title: string,
  album: string,
  duration: string,
  isPublished: boolean,
}

export interface TrackData {
  title: string,
  album: string,
  duration: string,
}

export interface TrackHistoryData {
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
