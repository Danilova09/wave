import { HttpClient } from '@angular/common/http';
import { Artist, ArtistData } from '../models/artist.model';
import { environment as env } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  constructor(private http: HttpClient) {
  }

  getArtists() {
    return this.http.get<Artist[]>(env.apiUrl + '/artists');
  }

  postArtist(artistData: ArtistData) {
    const formData = new FormData();
    Object.keys(artistData).forEach(key => {
      if (artistData[key] !== null) formData.append(key, artistData[key]);
    });
    return this.http.post<Artist>(env.apiUrl + '/artists', formData);
  }

  publishArtist(artistId: string) {
    return this.http.post(`${env.apiUrl}/artists/${artistId}/publish`, artistId);
  }
}
