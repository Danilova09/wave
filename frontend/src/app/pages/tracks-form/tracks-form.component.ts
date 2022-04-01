import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../models/album.model';
import { NgForm } from '@angular/forms';
import { AppState } from '../../store/types';
import { Store } from '@ngrx/store';
import { Artist } from '../../models/artist.model';
import { fetchArtistsRequest } from '../../store/artists.actions';
import { fetchAlbumsRequest } from '../../store/albums.actions';
import { postTrackRequest } from '../../store/tracks.actions';

@Component({
  selector: 'app-tracks-form',
  templateUrl: './tracks-form.component.html',
  styleUrls: ['./tracks-form.component.css']
})
export class TracksFormComponent implements OnInit {
  @ViewChild('f') tracksForm!: NgForm;
  artists!: Observable<Artist[]>;
  albums!: Observable<Album[]>;
  artistId!: string;

  constructor(
    private store: Store<AppState>,
  ) {
    this.artists = store.select(state => state.artists.artists);
    this.albums = store.select(state => state.albums.albums);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchArtistsRequest());
  }

  onSubmit() {
    const trackData = this.tracksForm.value;
    this.store.dispatch(postTrackRequest({trackData}));
  }

  getAlbums(artistId: string) {
    this.store.dispatch(fetchAlbumsRequest({artistId}));
  }
}
