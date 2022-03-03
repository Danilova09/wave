import { HttpClient } from '@angular/common/http';
import { ApiArtistData, Artist } from '../models/artist.model';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) {
  }

  getArtists() {
    return this.http.get<ApiArtistData[]>(environment.apiUrl + '/artists').pipe(
      map(artists => {
        return artists.map(artistData => {
          return new Artist(
            artistData._id,
            artistData.name,
            artistData.image,
            artistData.info,
          );
        });
      })
    );
  }
}
