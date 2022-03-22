import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Album, AlbumData } from '../models/album.model';
import { environment as env } from '../../environments/environment';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  constructor(private http: HttpClient,) {}

  getAlbumsByArtist(artistId: string) {
    let params = new HttpParams();
    params = params.append('artist', artistId);
    return this.http.get<Album[]>(env.apiUrl + '/albums', {params: params});
  }

  postAlbum(albumData: AlbumData) {
    const formData = new FormData();
    Object.keys(albumData).forEach(key => {
      if (albumData[key] !== null) formData.append(key, albumData[key]);
    });
    return this.http.post<Album>(env.apiUrl + '/albums', formData)
  }
}
