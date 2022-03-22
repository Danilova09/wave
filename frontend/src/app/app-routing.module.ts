import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './pages/artists/artists.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { LoginComponent } from './pages/login/login.component';
import { TracksComponent } from './pages/tracks/tracks.component';
import { TrackHistoryComponent } from './pages/track-history/track-history.component';
import { ArtistsFormComponent } from './pages/artists-form/artists-form.component';
import { AlbumsFormComponent } from './pages/albums-form/albums-form.component';
import { TracksFormComponent } from './pages/tracks-form/tracks-form.component';
import { RoleGuardService } from './services/role-guard.service';

const routes: Routes = [
  {path: '', component: ArtistsComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'artist-new',
    component: ArtistsFormComponent,
    canActivate: [RoleGuardService],
    data: {roles: ['admin', 'user']}
  },
  {
    path: 'album-new',
    component: AlbumsFormComponent,
    canActivate: [RoleGuardService],
    data: {roles: ['admin', 'user']}
  },
  {
    path: 'track-new',
    component: TracksFormComponent,
    canActivate: [RoleGuardService],
    data: {roles: ['admin', 'user']}
  },
  {path: 'track-history', component: TrackHistoryComponent},
  {path: 'tracks/byAlbum/:albumId', component: TracksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
