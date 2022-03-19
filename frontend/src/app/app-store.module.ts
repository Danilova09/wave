import { NgModule } from '@angular/core';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { usersReducer } from './store/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/users.effects';
import { artistsReducer } from './store/artists.reducer';
import { albumsReducer } from './store/albums.reducer';
import { ArtistsEffects } from './store/artists.effects';
import { AlbumsEffects } from './store/albums.effects';
import { tracksReducer } from './store/tracks.reducer';
import { TracksEffects } from './store/tracks.effects';

const localStorageSyncReducer = (reducer: ActionReducer<any>) => {
  return localStorageSync({
    keys: [{users: ['user']}],
    rehydrate: true
  })(reducer);
};

const reducers = {
  artists: artistsReducer,
  albums: albumsReducer,
  users: usersReducer,
  tracks: tracksReducer,
};

const metaReducers: MetaReducer[] = [localStorageSyncReducer];

const effects = [
  UsersEffects,
  ArtistsEffects,
  AlbumsEffects,
  TracksEffects,
];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot(effects),
  ],
  exports: [StoreModule, EffectsModule]
})
export class AppStoreModule {}
