import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlbumsService } from '../services/albums.service';
import { fetchAlbumsRequest, fetchAlbumsSuccess } from './albums.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { fetchArtistsFailure } from './artists.actions';

@Injectable()
export class AlbumsEffects {
  fetchAlbums = createEffect(() => this.actions.pipe(
    ofType(fetchAlbumsRequest),
    mergeMap(({artistId}) => this.albumsService.getAlbums(artistId).pipe(
      map(albums => fetchAlbumsSuccess({albums})),
      catchError((e) => of(fetchArtistsFailure({error: e})))
    ))
  ));

  constructor(
    private actions: Actions,
    private albumsService: AlbumsService,
  ) {}
}
