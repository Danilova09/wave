import { TracksState } from './types';
import { createReducer, on } from '@ngrx/store';
import { fetchTracksByAlbumFailure, fetchTracksByAlbumRequest, fetchTracksByAlbumSuccess } from './tracks.actions';

const initialState: TracksState = {
  trackData: null,
  fetchLoading: false,
  fetchError: null,
}

export const tracksReducer = createReducer(
  initialState,
  on(fetchTracksByAlbumRequest, (state, {albumId}) => ({...state, fetchLoading: true})),
  on(fetchTracksByAlbumSuccess, (state, {trackData}) => ({...state, fetchLoading: false, trackData})),
  on(fetchTracksByAlbumFailure, (state, {error}) => ({...state, fetchLoading: false, fetchError: error}))
)
