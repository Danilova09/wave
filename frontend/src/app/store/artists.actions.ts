import { createAction, props } from '@ngrx/store';
import { Artist, ArtistData } from '../models/artist.model';

export const fetchArtistsRequest = createAction('[Artists] Fetch Request');
export const fetchArtistsSuccess = createAction('[Artists] Fetch Success', props<{ artists: Artist[] }>());
export const fetchArtistsFailure = createAction('[Artists] Fetch Failure', props<{ error: string }>());

export const postArtistRequest = createAction('[Artists] Post Request', props<{ artistData: ArtistData }>());
export const postArtistSuccess = createAction('[Artists] Post Success');
export const postArtistFailure = createAction('[Artists] Post Failure', props<{ error: string }>());

export const publishArtistRequest = createAction('[Artists] Put Request', props<{ artistId: string }>());
export const publishArtistSuccess = createAction('[Artists] Put Success');
export const publishArtistFailure = createAction('[Artists] Put Failure', props<{ error: string }>());

export const deleteArtistRequest = createAction('[Artists] Delete Request', props<{ artistId: string }>());
export const deleteArtistSuccess = createAction('[Artists] Delete Success');
export const deleteArtistFailure = createAction('[Artists] Delete Failure', props<{ error: string }>());

