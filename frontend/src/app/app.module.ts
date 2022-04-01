import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ArtistsComponent } from './pages/artists/artists.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ValidateEqualModule } from 'ng-validate-equal';
import { FileInputComponent } from './ui/file-input/file-input.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppStoreModule } from './app-store.module';
import { LoginComponent } from './pages/login/login.component';
import { MatMenuModule } from '@angular/material/menu';
import { CenteredCardComponent } from './ui/centered-card/centered-card.component';
import { TracksComponent } from './pages/tracks/tracks.component';
import { ImagePipe } from './pipes/image.pipe';
import { TrackHistoryComponent } from './pages/track-history/track-history.component';
import { ArtistsFormComponent } from './pages/artists-form/artists-form.component';
import { AlbumsFormComponent } from './pages/albums-form/albums-form.component';
import { TracksFormComponent } from './pages/tracks-form/tracks-form.component';
import { AuthInterceptor } from './auth.interceptor';
import { HasRolesDirective } from './directives/has-roles.directive';
import { MatSelectModule } from '@angular/material/select';
import { ArtistsPipe } from './pipes/artists.pipe';
import { AlbumsPipe } from './pipes/albums.pipe';
import { TracksPipe } from './pipes/tracks.pipe';
import { FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { environment } from '../environments/environment';


const socialConfig: SocialAuthServiceConfig = {
  autoLogin: false,
  providers: [
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider(environment.fbAppId, {
        scope: 'email,public_profile'
      })
    }
  ]
};


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ArtistsComponent,
    AlbumsComponent,
    RegisterFormComponent,
    FileInputComponent,
    LoginComponent,
    CenteredCardComponent,
    TracksComponent,
    ImagePipe,
    TrackHistoryComponent,
    ArtistsFormComponent,
    AlbumsFormComponent,
    TracksFormComponent,
    HasRolesDirective,
    ArtistsPipe,
    AlbumsPipe,
    TracksPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ValidateEqualModule,
    MatSnackBarModule,
    MatCardModule,
    FlexModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    AppStoreModule,
    MatMenuModule,
    MatSelectModule,
    SocialLoginModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: 'SocialAuthServiceConfig', useValue: socialConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
