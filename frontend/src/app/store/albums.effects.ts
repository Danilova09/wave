import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlbumsService } from '../services/albums.service';
import {
  fetchAlbumsRequest,
  fetchAlbumsSuccess,
  postAlbumFailure,
  postAlbumRequest,
  postAlbumSuccess,
  publishAlbumFailure,
  publishAlbumRequest,
  publishAlbumSuccess
} from './albums.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { fetchArtistsFailure } from './artists.actions';
import { HelpersService } from '../services/helpers.service';
import { Router } from '@angular/router';
import { AppState } from './types';
import { Store } from '@ngrx/store';

@Injectable()
export class AlbumsEffects {
  constructor(
    private actions: Actions,
    private albumsService: AlbumsService,
    private store: Store<AppState>,
    private helpers: HelpersService,
    private router: Router,
  ) {
  }

  fetchAlbums = createEffect(() => this.actions.pipe(
    ofType(fetchAlbumsRequest),
    mergeMap(({artistId}) => this.albumsService.getAlbumsByArtist(artistId).pipe(
      map(albums => fetchAlbumsSuccess({albums})),
      catchError((error) => of(fetchArtistsFailure({error})))
    ))
  ));

  postAlbum = createEffect(() => this.actions.pipe(
    ofType(postAlbumRequest),
    mergeMap(({albumData}) => this.albumsService.postAlbum(albumData).pipe(
      map((album) => postAlbumSuccess({album})),
      tap((album) => {
        const artist = album.album.artist;
        void this.router.navigate(
          ['/albums'],
          {queryParams: {artist}}
        );
        this.helpers.openSnackbar('Album created!');
      }),
      catchError((error) => of(postAlbumFailure({error})))
    ))
  ));

  publishAlbum = createEffect(() => this.actions.pipe(
    ofType(publishAlbumRequest),
    mergeMap(({albumId}) => this.albumsService.publishAlbum(albumId).pipe(
      map((album) => publishAlbumSuccess({album})),
      tap((album) => {
        const artistId = album.album.artist;
        this.store.dispatch(fetchAlbumsRequest({artistId}));
        this.helpers.openSnackbar('Album is published!');
      }),
      catchError((e) => of(publishAlbumFailure({error: e})))
    ))
  ))
}
