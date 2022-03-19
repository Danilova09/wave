import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiHistoryData, TrackHistory, TracksData } from '../models/track.model';
import { environment as env } from '../../environments/environment';
import { NEVER } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TracksService {
  constructor(private http: HttpClient) {}

  getTracksByAlbum(albumId: string) {
    return this.http.get<TracksData>(`${env.apiUrl}/tracks/byAlbum/${albumId}`);
  }

  postTrackHistory(apiHistoryData: ApiHistoryData) {
    if (!apiHistoryData.token) {
      return NEVER;
    }
    let headers = new HttpHeaders({'Authorization': apiHistoryData.token});
    return this.http.post<ApiHistoryData>(env.apiUrl + '/track_history', apiHistoryData, {headers});
  }

  getTrackHistory(usersToken: undefined | string) {
    if (!usersToken) {
      return NEVER;
    }
    let headers = new HttpHeaders({'Authorization': usersToken});
    return this.http.get<TrackHistory[]>(env.apiUrl + '/track_history', {headers});
  }
}
