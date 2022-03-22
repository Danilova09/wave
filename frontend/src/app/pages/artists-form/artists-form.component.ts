import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppState } from '../../store/types';
import { Store } from '@ngrx/store';
import { postArtistRequest } from '../../store/artists.actions';

@Component({
  selector: 'app-artists-form',
  templateUrl: './artists-form.component.html',
  styleUrls: ['./artists-form.component.css']
})
export class ArtistsFormComponent {
  @ViewChild('f') artistsForm!: NgForm;
  imageError: Boolean = false;

  constructor(
    private store: Store<AppState>,
  ) {}

  onSubmit() {
    const image = this.artistsForm.controls['image'].value;
    this.imageError = !image ? true : false;
    if (this.artistsForm.valid) {
      const artistData = this.artistsForm.value;
      this.store.dispatch(postArtistRequest({artistData}));
    }
  }
}
