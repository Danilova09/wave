import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TracksService } from '../services/tracks.service';
import { fetchTracksByAlbumFailure, fetchTracksByAlbumRequest, fetchTracksByAlbumSuccess } from './tracks.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class TracksEffects {
  constructor(
    private actions: Actions,
    private tracksService: TracksService,
  ) {
  }

  fetchTracks = createEffect(() => this.actions.pipe(
    ofType(fetchTracksByAlbumRequest),
    mergeMap(({albumId}) => this.tracksService.getTracksByAlbum(albumId).pipe(
      map(trackData => fetchTracksByAlbumSuccess({trackData})),
      catchError((e) => of(fetchTracksByAlbumFailure({error: e})))
    ))
  ));
}
