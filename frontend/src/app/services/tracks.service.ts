import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiHistoryData, TrackHistory, TracksData } from '../models/track.model';
import { environment as env } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TracksService {
  constructor(private http: HttpClient) {}

  getTracksByAlbum(albumId: string) {
    return this.http.get<TracksData>(`${env.apiUrl}/tracks/byAlbum/${albumId}`);
  }

  postTrackHistory(apiHistoryData: ApiHistoryData) {
    return this.http.post<ApiHistoryData>(env.apiUrl + '/track_history', apiHistoryData);
  }

  getTrackHistory(usersToken: undefined | string) {
    return this.http.get<TrackHistory[]>(env.apiUrl + '/track_history');
  }
}
