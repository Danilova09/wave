import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArtistsService } from '../services/artists.service';
import {
  fetchArtistsFailure,
  fetchArtistsRequest,
  fetchArtistsSuccess, postArtistFailure,
  postArtistRequest,
  postArtistSuccess, publishArtistFailure, publishArtistRequest, publishArtistSuccess
} from './artists.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { HelpersService } from '../services/helpers.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './types';

@Injectable()
export class ArtistsEffects {
  constructor(
    private actions: Actions,
    private artistsService: ArtistsService,
    private helpers: HelpersService,
    private router: Router,
    private store: Store<AppState>,
  ) {
  }

  fetchArtists = createEffect(() => this.actions.pipe(
    ofType(fetchArtistsRequest),
    mergeMap(() => this.artistsService.getArtists().pipe(
      map(artists => fetchArtistsSuccess({artists})),
      catchError((e) => of(fetchArtistsFailure({error: e})))
    ))
  ));

  postArtist = createEffect(() => this.actions.pipe(
    ofType(postArtistRequest),
    mergeMap(({artistData}) => this.artistsService.postArtist(artistData).pipe(
      map(() => postArtistSuccess()),
      tap(() => {
        void this.router.navigate(['/']);
        this.helpers.openSnackbar('Artist created!');
      }),
      catchError((e) => of(postArtistFailure({error: e})))
    ))
  ));

  publishArtist = createEffect(() => this.actions.pipe(
    ofType(publishArtistRequest),
    mergeMap(({artistId}) => this.artistsService.publishArtist(artistId).pipe(
      map(() => publishArtistSuccess()),
      tap(() => {
        this.store.dispatch(fetchArtistsRequest());
        this.helpers.openSnackbar('Artist published!');
      }),
      catchError((e) => of(publishArtistFailure({error: e})))
    ))
  ))
}
