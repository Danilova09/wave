import { TracksState } from './types';
import { createReducer, on } from '@ngrx/store';
import {
  fetchTracksByAlbumFailure,
  fetchTracksByAlbumRequest,
  fetchTracksByAlbumSuccess,
  postUsersTrackHistory,
  postUsersTrackHistorySuccess,
  postUsersTrackHistoryFailure,
  getUsersTrackHistory,
  getUsersTrackHistorySuccess,
  getUsersTrackHistoryFailure,
} from './tracks.actions';

const initialState: TracksState = {
  trackData: null,
  fetchLoading: false,
  fetchError: null,
  postLoading: false,
  postError: null,
  usersTrackHistory: [],
  trackHistoryLoading: false,
  trackHistoryError: null,
}

export const tracksReducer = createReducer(
  initialState,
  on(fetchTracksByAlbumRequest, (state) => ({...state, fetchLoading: true})),
  on(fetchTracksByAlbumSuccess, (state, {trackData}) => ({...state, fetchLoading: false, trackData})),
  on(fetchTracksByAlbumFailure, (state, {error}) => ({...state, fetchLoading: false, fetchError: error})),
  on(postUsersTrackHistory, (state) => ({...state, postLoading: true})),
  on(postUsersTrackHistorySuccess, (state) => ({...state, postLoading: false})),
  on(postUsersTrackHistoryFailure, (state, {error}) => ({...state, postLoading: false, postError: error})),
  on(getUsersTrackHistory, (state) => ({...state, trackHistoryLoading: true})),
  on(getUsersTrackHistorySuccess, (state, {usersTrackHistory}) => ({...state, trackHistoryLoading: false, usersTrackHistory})),
  on(getUsersTrackHistoryFailure, (state, {error}) => ({...state, trackHistoryLoading: false, trackHistoryError: error})),
)
