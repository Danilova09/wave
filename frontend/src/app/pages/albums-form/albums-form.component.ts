import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/types';
import { fetchArtistsRequest, postArtistRequest } from '../../store/artists.actions';
import { Observable } from 'rxjs';
import { Artist } from '../../models/artist.model';
import { ArtistsService } from '../../services/artists.service';
import { AlbumsService } from '../../services/albums.service';
import { postAlbumRequest } from '../../store/albums.actions';

@Component({
  selector: 'app-albums-form',
  templateUrl: './albums-form.component.html',
  styleUrls: ['./albums-form.component.css']
})
export class AlbumsFormComponent implements OnInit {
  @ViewChild('f') albumsForm!: NgForm;
  artists!: Observable<Artist[]>;
  imageError: Boolean = false;

  constructor(
    private store: Store<AppState>,
  ) {
    this.artists = store.select(state => state.artists.artists);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchArtistsRequest());
  }

  onSubmit() {
    const image = this.albumsForm.controls['image'].value;
    this.imageError = !image ? true : false;
    if (this.albumsForm.valid) {
      const albumData = this.albumsForm.value;
      this.store.dispatch(postAlbumRequest({albumData}));
    }
  }
}
