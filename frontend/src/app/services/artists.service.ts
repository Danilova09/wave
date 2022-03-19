import { HttpClient } from '@angular/common/http';
import { Artist } from '../models/artist.model';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  constructor(private http: HttpClient) {}

  getArtists() {
    return this.http.get<Artist[]>(environment.apiUrl + '/artists');
  }
}
