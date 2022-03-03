import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Album } from '../../models/album.model';
import { fetchAlbumsRequest } from '../../store/albums.actions';
import { AppState } from '../../store/types';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

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
    private route: ActivatedRoute)
  {
    this.albums = store.select(state => state.albums.albums);
    this.loading = store.select(state => state.albums.fetchLoading);
    this.error = store.select(state => state.albums.fetchError);
  }

  ngOnInit(): void {
    let artistId = this.route.snapshot.queryParams['artist'];
    this.store.dispatch(fetchAlbumsRequest({artistId}));
  }
}
