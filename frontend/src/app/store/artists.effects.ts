import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArtistsService } from '../services/artists.service';
import {
  fetchArtistsFailure,
  fetchArtistsRequest,
  fetchArtistsSuccess,
  postArtistRequest,
  postArtistSuccess
} from './artists.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { HelpersService } from '../services/helpers.service';
import { Router } from '@angular/router';

@Injectable()
export class ArtistsEffects {
  constructor(
    private actions: Actions,
    private artistsService: ArtistsService,
    private helpers: HelpersService,
    private router: Router,
  ) {}

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
        this.helpers.openSnackbar('Artist created!')
      })
    ))
  ))
}
