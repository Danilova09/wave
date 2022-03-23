import { AlbumsState } from './types';
import { createReducer, on } from '@ngrx/store';
import {
  deleteAlbumFailure,
  deleteAlbumRequest, deleteAlbumSuccess,
  fetchAlbumsFailure,
  fetchAlbumsRequest,
  fetchAlbumsSuccess,
  postAlbumFailure,
  postAlbumRequest,
  postAlbumSuccess,
  publishAlbumFailure,
  publishAlbumRequest,
  publishAlbumSuccess
} from './albums.actions';

const initialState: AlbumsState = {
  albums: [],
  fetchLoading: false,
  fetchError: null,
  postLoading: false,
  postError: null,
  publishLoading: false,
  publishError: null,
  deleteLoading: false,
  deleteError: null,
};

export const albumsReducer = createReducer(
  initialState,
  on(fetchAlbumsRequest, (state) => ({...state, fetchLoading: true})),
  on(fetchAlbumsSuccess, (state, {albums}) => ({...state, fetchLoading: false, albums})),
  on(fetchAlbumsFailure, (state, {error}) => ({...state, fetchLoading: false, fetchError: error})),
  on(postAlbumRequest, (state) => ({...state, postLoading: true})),
  on(postAlbumSuccess, (state) => ({...state, postLoading: false})),
  on(postAlbumFailure, (state, {error}) => ({...state, postLoading: false, postError: error})),
  on(publishAlbumRequest, (state) => ({...state, publishLoading: true})),
  on(publishAlbumSuccess, (state) => ({...state, publishLoading: false})),
  on(publishAlbumFailure, (state, {error}) => ({...state, publishLoading: false, publishError: error})),
  on(deleteAlbumRequest, (state) => ({...state, deleteLoading: true})),
  on(deleteAlbumSuccess, (state) => ({...state, deleteLoading: false})),
  on(deleteAlbumFailure, (state, {error}) => ({...state, deleteLoading: false, deleteError: error})),
);
