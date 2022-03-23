import { createAction, props } from '@ngrx/store';
import { Album, AlbumData, ApiAlbum } from '../models/album.model';

export const fetchAlbumsRequest = createAction('[Albums] Fetch Request', props<{ artistId: string }>());
export const fetchAlbumsSuccess = createAction('[Albums] Fetch Success', props<{ albums: Album[] }>());
export const fetchAlbumsFailure = createAction('[Albums] Fetch Failure', props<{ error: string }>());

export const postAlbumRequest = createAction('[Albums] Post Request', props<{ albumData: AlbumData }>());
export const postAlbumSuccess = createAction('[Albums] Post Success', props<{ album: Album }>());
export const postAlbumFailure = createAction('[Albums] Post Failure', props<{ error: string }>());

export const publishAlbumRequest = createAction('[Albums] Put Request', props<{ albumId: string }>());
export const publishAlbumSuccess = createAction('[Albums] Put Success', props<{ album: ApiAlbum }>());
export const publishAlbumFailure = createAction('[Albums] Put Failure', props<{ error: string }>());

export const deleteAlbumRequest = createAction('[Albums] Delete Request', props<{ albumId: string }>());
export const deleteAlbumSuccess = createAction('[Albums] Delete Success', props<{ album: ApiAlbum }>());
export const deleteAlbumFailure = createAction('[Albums] Delete Failure', props<{ error: string }>());
