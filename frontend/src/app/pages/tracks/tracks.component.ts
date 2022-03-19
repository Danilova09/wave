import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/types';
import { Store } from '@ngrx/store';
import { fetchTracksByAlbumRequest, postUsersTrackHistory } from '../../store/tracks.actions';
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
  usersToken!: undefined | string;
  env = environment;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
  ) {
    this.trackData = store.select(state => state.tracks.trackData);
    store.select(state => state.users.user).subscribe(user => {
      this.usersToken = user?.token;
    })
  }

  ngOnInit(): void {
    const albumId = this.route.snapshot.params['albumId'];
    this.store.dispatch(fetchTracksByAlbumRequest({albumId}));
  }

  addToTrackHistory(trackId: string) {
    const apiHistoryData = {
      token: this.usersToken,
      track: trackId,
    }
    this.store.dispatch(postUsersTrackHistory({apiHistoryData}))
  }
}
