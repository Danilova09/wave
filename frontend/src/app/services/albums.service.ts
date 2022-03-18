import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Album} from '../models/album.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  constructor(private http: HttpClient,) {
  }

  getAlbums(artistId: string) {
    let params = new HttpParams();
    params = params.append('artist', artistId);
    return this.http.get<Album[]>(environment.apiUrl + '/albums', {params: params});
  }
}
