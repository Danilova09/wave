import { createAction, props } from '@ngrx/store';
import { ApiHistoryData, TrackHistory, TracksData } from '../models/track.model';

export const fetchTracksByAlbumRequest = createAction('[Tracks] Fetch Request', props<{ albumId: string }>());
export const fetchTracksByAlbumSuccess = createAction('[Tracks] Fetch Success', props<{ trackData: TracksData }>());
export const fetchTracksByAlbumFailure = createAction('[Tracks] Fetch Failure', props<{ error: string }>());

export const postUsersTrackHistory = createAction('[Tracks] Post TrackHistory', props<{ apiHistoryData: ApiHistoryData }>());
export const postUsersTrackHistorySuccess = createAction('[Tracks] Post TrackHistory Success');
export const postUsersTrackHistoryFailure = createAction('[Tracks] Post TrackHistory Failure', props<{ error: string }>());

export const getUsersTrackHistory = createAction('[Track-History] Fetch Request', props<{ usersToken: undefined | string }>());
export const getUsersTrackHistorySuccess = createAction('[Track-History] Fetch Success', props<{ usersTrackHistory: TrackHistory[] }>());
export const getUsersTrackHistoryFailure = createAction('[Track-History] Fetch Failure', props<{ error: string }>());

