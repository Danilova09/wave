import { createAction, props } from '@ngrx/store';
import { Artist } from '../models/artist.model';
import { ArtistData } from '../models/artist.model';

export const fetchArtistsRequest = createAction('[Artists] Fetch Request');
export const fetchArtistsSuccess = createAction('[Artists] Fetch Success', props<{ artists: Artist[] }>());
export const fetchArtistsFailure = createAction('[Artists] Fetch Failure', props<{ error: string }>());

export const postArtistRequest = createAction('[Artists] Post Request', props<{ artistData: ArtistData }>());
export const postArtistSuccess = createAction('[Artists] Post Success');
export const postArtistFailure = createAction('[Artists] Post Failure', props<{ error: string }>());

