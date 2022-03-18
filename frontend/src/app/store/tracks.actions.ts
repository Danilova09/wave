import { createAction, props } from '@ngrx/store';
import { TracksData } from '../models/track.model';

export const fetchTracksByAlbumRequest = createAction('[Tracks] Fetch Request', props<{albumId: string}>());
export const fetchTracksByAlbumSuccess = createAction('[Tracks] Fetch Success', props<{trackData: TracksData}>());
export const fetchTracksByAlbumFailure = createAction('[Tracks] Fetch Failure', props<{error: string}>());
