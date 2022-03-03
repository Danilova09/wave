import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Album, ApiAlbumData } from '../models/album.model';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  constructor(private http: HttpClient,) {
  }

  getAlbums(artistId: string) {
    let params = new HttpParams();
    params = params.append('artist', artistId);
    return this.http.get<ApiAlbumData[]>(environment.apiUrl + '/albums', {params: params}).pipe(
      map(albums => {
        return albums.map(albumData => {
          return new Album(
            albumData._id,
            albumData.title,
            albumData.artist,
            albumData.releaseDate,
            albumData.image,
          );
        });
      })
    );
  }
}
