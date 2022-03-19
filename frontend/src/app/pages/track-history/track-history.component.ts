import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/types';
import { Store } from '@ngrx/store';
import { getUsersTrackHistory } from '../../store/tracks.actions';
import { TrackHistory } from '../../models/track.model';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-track-history',
  templateUrl: './track-history.component.html',
  styleUrls: ['./track-history.component.css']
})
export class TrackHistoryComponent implements OnInit {
  user!: Observable<null | User>;
  usersToken!: undefined | string;
  trackHistory!: Observable<TrackHistory[]>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.user = store.select(state => state.users.user);
    store.select(state => state.users.user).subscribe(user => {
      this.usersToken = user?.token;
    });
    this.trackHistory = store.select(state => state.tracks.usersTrackHistory);
  }

  ngOnInit(): void {
    this.store.dispatch(getUsersTrackHistory({usersToken: this.usersToken}));
  }
}
