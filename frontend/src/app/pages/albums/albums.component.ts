import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Album } from '../../models/album.model';
import { deleteAlbumRequest, fetchAlbumsRequest, publishAlbumRequest } from '../../store/albums.actions';
import { AppState } from '../../store/types';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Observable<Album[]>;
  loading: Observable<boolean>;
  error: Observable<null | string>;
  env = environment;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    )
  {
    this.albums = store.select(state => state.albums.albums);
    this.loading = store.select(state => state.albums.fetchLoading);
    this.error = store.select(state => state.albums.fetchError);
  }

  ngOnInit(): void {
    let artistId = this.route.snapshot.queryParams['artist'];
    this.store.dispatch(fetchAlbumsRequest({artistId}));
  }

  publish(albumId: string) {
    this.store.dispatch(publishAlbumRequest({albumId}));
  }

  delete(albumId: string) {
    this.store.dispatch(deleteAlbumRequest({albumId}));
  }
}
