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
  postTrackFailure,
  postTrackRequest,
  postTrackSuccess,
  postUsersTrackHistory,
  postUsersTrackHistoryFailure,
  postUsersTrackHistorySuccess
} from './tracks.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { HelpersService } from '../services/helpers.service';

@Injectable()
export class TracksEffects {
  constructor(
    private actions: Actions,
    private tracksService: TracksService,
    private helpers: HelpersService,
    private router: Router,
  ) {
  }

  fetchTracks = createEffect(() => this.actions.pipe(
    ofType(fetchTracksByAlbumRequest),
    mergeMap(({albumId}) => this.tracksService.getTracksByAlbum(albumId).pipe(
      map(trackData => fetchTracksByAlbumSuccess({trackData})),
      catchError((e) => of(fetchTracksByAlbumFailure({error: e})))
    ))
  ));

  postTrack = createEffect(() => this.actions.pipe(
    ofType(postTrackRequest),
    mergeMap(({trackData}) => this.tracksService.postTrack(trackData).pipe(
      map((track) => postTrackSuccess({track})),
      tap((track) => {
        const albumId = track.track.album;
        void this.router.navigate([`/tracks/byAlbum/${albumId}`]);
        this.helpers.openSnackbar('Track is created!');
      }),
      catchError((error) => of(postTrackFailure({error})))
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
