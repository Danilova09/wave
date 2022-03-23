import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../../models/artist.model';
import { Store } from '@ngrx/store';
import { fetchArtistsRequest, publishArtistRequest } from '../../store/artists.actions';
import { AppState } from '../../store/types';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists: Observable<Artist[]>;
  loading: Observable<boolean>;
  error: Observable<null | string>;
  env = environment;

  constructor(private store: Store<AppState>) {
    this.artists = store.select(state => state.artists.artists);
    this.loading = store.select(state => state.artists.fetchLoading);
    this.error = store.select(state => state.artists.fetchError);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchArtistsRequest());
  }

  publish(artistId: string) {
    this.store.dispatch(publishArtistRequest({artistId}))
  }
}
