import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TracksService } from '../services/tracks.service';
import {
  fetchTracksByAlbumFailure,
  fetchTracksByAlbumRequest,
  fetchTracksByAlbumSuccess,
  getUsersTrackHistory,
  getUsersTrackHistoryFailure,
  getUsersTrackHistorySuccess,
  postUsersTrackHistory,
  postUsersTrackHistoryFailure,
  postUsersTrackHistorySuccess
} from './tracks.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';

@Injectable()
export class TracksEffects {
  constructor(
    private actions: Actions,
    private tracksService: TracksService,
  ) {}

  fetchTracks = createEffect(() => this.actions.pipe(
    ofType(fetchTracksByAlbumRequest),
    mergeMap(({albumId}) => this.tracksService.getTracksByAlbum(albumId).pipe(
      map(trackData => fetchTracksByAlbumSuccess({trackData})),
      catchError((e) => of(fetchTracksByAlbumFailure({error: e})))
    ))
  ));

  postTrackHistory = createEffect(() => this.actions.pipe(
    ofType(postUsersTrackHistory),
    mergeMap(({apiHistoryData}) => this.tracksService.postTrackHistory(apiHistoryData).pipe(
      map(() => postUsersTrackHistorySuccess()),
      catchError((e) => of(postUsersTrackHistoryFailure({error: e})))
    ))
  ));


  getUsersTrackHistory = createEffect(() => this.actions.pipe(
    ofType(getUsersTrackHistory),
    mergeMap(({usersToken}) => this.tracksService.getTrackHistory(usersToken).pipe(
      map((usersTrackHistory) => getUsersTrackHistorySuccess({usersTrackHistory})),
      catchError((e) => of(getUsersTrackHistoryFailure({error: e})))
    ))
  ));
}
