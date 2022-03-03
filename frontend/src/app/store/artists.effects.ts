import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArtistsService } from '../services/artists.service';
import { fetchArtistsFailure, fetchArtistsRequest, fetchArtistsSuccess } from './artists.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ArtistsEffects {
  fetchArtists = createEffect(() => this.actions.pipe(
    ofType(fetchArtistsRequest),
    mergeMap(() => this.artistsService.getArtists().pipe(
      map(artists => fetchArtistsSuccess({artists})),
      catchError((e) => of(fetchArtistsFailure({error: e})))
    ))
  ));

  constructor(
    private actions: Actions,
    private artistsService: ArtistsService,
  ) {}
}
