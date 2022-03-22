import { ArtistsState } from './types';
import { createReducer, on } from '@ngrx/store';
import {
  fetchArtistsFailure,
  fetchArtistsRequest,
  fetchArtistsSuccess,
  postArtistFailure,
  postArtistRequest, postArtistSuccess
} from './artists.actions';

const initialState: ArtistsState = {
  artists: [],
  fetchLoading: false,
  fetchError: null,
  postLoading: false,
  postError: null,
};

export const artistsReducer = createReducer(
  initialState,
  on(fetchArtistsRequest, state => ({...state, fetchLoading: true})),
  on(fetchArtistsSuccess, (state, {artists}) => ({...state, fetchLoading: false, artists})),
  on(fetchArtistsFailure, (state, {error}) => ({...state, fetchLoading: false, fetchError: error})),
  on(postArtistRequest, (state) => ({...state, postLoading: false})),
  on(postArtistSuccess, (state) => ({...state, postLoading: false})),
  on(postArtistFailure, (state, {error}) => ({...state, postLoading: false, postError: error})),
);
