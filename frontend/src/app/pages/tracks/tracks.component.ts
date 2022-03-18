import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/types';
import { Store } from '@ngrx/store';
import { fetchTracksByAlbumRequest } from '../../store/tracks.actions';
import { Observable } from 'rxjs';
import { TracksData } from '../../models/track.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  trackData!: Observable<null | TracksData>;
  env = environment;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
    this.trackData = store.select(state => state.tracks.trackData);
  }

  ngOnInit(): void {
    const albumId = this.route.snapshot.params['albumId'];
    this.store.dispatch(fetchTracksByAlbumRequest({albumId}));
  }
}
