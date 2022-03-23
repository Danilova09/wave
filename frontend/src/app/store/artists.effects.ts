import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArtistsService } from '../services/artists.service';
import {
  deleteArtistFailure,
  deleteArtistRequest,
  deleteArtistSuccess,
  fetchArtistsFailure,
  fetchArtistsRequest,
  fetchArtistsSuccess,
  postArtistFailure,
  postArtistRequest,
  postArtistSuccess,
  publishArtistFailure,
  publishArtistRequest,
  publishArtistSuccess
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
  ) {}

  fetchArtists = createEffect(() => this.actions.pipe(
    ofType(fetchArtistsRequest),
    mergeMap(() => this.artistsService.getArtists().pipe(
      map(artists => fetchArtistsSuccess({artists})),
      catchError((error) => of(fetchArtistsFailure({error})))
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
      catchError((error) => of(postArtistFailure({error})))
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
      catchError((error) => of(publishArtistFailure({error})))
    ))
  ));


  deleteArtist = createEffect(() => this.actions.pipe(
    ofType(deleteArtistRequest),
    mergeMap(({artistId}) => this.artistsService.deleteArtist(artistId).pipe(
      map(() => deleteArtistSuccess()),
      tap(() => {
        this.store.dispatch(fetchArtistsRequest());
        this.helpers.openSnackbar('Artist deleted');
      }),
      catchError((error) => of(deleteArtistFailure({error})))
    ))
  ));
}
