import { ArtistsState } from './types';
import { createReducer, on } from '@ngrx/store';
import {
  deleteArtistFailure,
  deleteArtistRequest,
  deleteArtistSuccess,
  fetchArtistsFailure,
  fetchArtistsRequest,
  fetchArtistsSuccess,
  postArtistFailure,
  postArtistRequest,
  postArtistSuccess,
  publishArtistFailure,
  publishArtistRequest,
  publishArtistSuccess
} from './artists.actions';

const initialState: ArtistsState = {
  artists: [],
  fetchLoading: false,
  fetchError: null,
  postLoading: false,
  postError: null,
  publishLoading: false,
  publishError: null,
  deleteLoading: false,
  deleteError: null,
};

export const artistsReducer = createReducer(
  initialState,
  on(fetchArtistsRequest, (state) => ({...state, fetchLoading: true})),
  on(fetchArtistsSuccess, (state, {artists}) => ({...state, fetchLoading: false, artists})),
  on(fetchArtistsFailure, (state, {error}) => ({...state, fetchLoading: false, fetchError: error})),
  on(postArtistRequest, (state) => ({...state, postLoading: false})),
  on(postArtistSuccess, (state) => ({...state, postLoading: false})),
  on(postArtistFailure, (state, {error}) => ({...state, postLoading: false, postError: error})),
  on(publishArtistRequest, (state) => ({...state, publishLoading: true})),
  on(publishArtistSuccess, (state) => ({...state, publishLoading: false})),
  on(publishArtistFailure, (state, {error}) => ({...state, publishLoading: false, publishError: error})),
  on(deleteArtistRequest, (state) => ({...state, deleteLoading: true})),
  on(deleteArtistSuccess, (state) => ({...state, deleteLoading: false})),
  on(deleteArtistFailure, (state, {error}) => ({...state, deleteLoading: false, deleteError: error})),
);
