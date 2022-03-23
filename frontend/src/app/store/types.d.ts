import { Artist } from '../models/artist.model';
import { Album } from '../models/album.model';
import { LoginError, RegisterError, User } from '../models/user.model';
import { TrackHistory, TrackHistoryData } from '../models/track.model';

export type ArtistsState = {
  artists: Artist[],
  fetchLoading: boolean,
  fetchError: null | string,
  postLoading: Boolean,
  postError: null | string,
  publishLoading: boolean,
  publishError: null | string,
}

export type AlbumsState = {
  albums: Album[],
  fetchLoading: boolean,
  fetchError: null | string,
  postLoading: boolean,
  postError: null | string,
  publishLoading: boolean,
  publishError: null | string,
}

export type UsersState = {
  user: null | User,
  registerLoading: boolean,
  registerError: null | RegisterError,
  loginLoading: boolean,
  loginError: null | LoginError,
}

export type TracksState = {
  trackData: null | TrackHistoryData,
  fetchLoading: boolean,
  fetchError: null | string,
  postTrackLoading: Boolean,
  postTrackError: null | string,
  postHistoryLoading: boolean,
  postHistoryError: null | string,
  usersTrackHistory: TrackHistory[],
  trackHistoryLoading: boolean,
  trackHistoryError: null | string,
  publishLoading: boolean,
  publishError: null | string,
}

export type AppState = {
  artists: ArtistsState,
  albums: AlbumsState,
  users: UsersState,
  tracks: TracksState,
}
