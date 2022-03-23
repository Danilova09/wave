import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiHistoryData, ApiTrack, Track, TrackData, TrackHistory, TrackHistoryData } from '../models/track.model';
import { environment as env } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TracksService {
  constructor(private http: HttpClient) {}

  getTracksByAlbum(albumId: string) {
    return this.http.get<TrackHistoryData>(`${env.apiUrl}/tracks/byAlbum/${albumId}`);
  }

  postTrack(trackData: TrackData) {
    return this.http.post<Track>(env.apiUrl + '/tracks', trackData);
  }

  postTrackHistory(apiHistoryData: ApiHistoryData) {
    return this.http.post<ApiHistoryData>(env.apiUrl + '/track_history', apiHistoryData);
  }

  getTrackHistory() {
    return this.http.get<TrackHistory[]>(env.apiUrl + '/track_history');
  }

  publishTrack(trackId: string) {
    return this.http.post<ApiTrack>(`${env.apiUrl}/tracks/${trackId}/publish`, trackId);
  }

  deleteTrack(trackId: string) {
    return this.http.delete<ApiTrack>(`${env.apiUrl}/tracks/${trackId}`);
  }
}
