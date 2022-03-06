import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './pages/artists/artists.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';

const routes: Routes = [
  {path: '', component: ArtistsComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'register', component: RegisterFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
