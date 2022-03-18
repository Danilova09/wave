import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiHistoryData, Track, TrackHistory, TracksData } from '../models/track.model';
import { environment  as env } from '../../environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TracksService {
  constructor(private http: HttpClient) { }

  getTracksByAlbum(albumId: string) {
    return this.http.get<TracksData>(`${env.apiUrl}/tracks/byAlbum/${albumId}`)
      .pipe(tap (tracks => {
        console.log(tracks);
      }))
  }

  postTrackHistory(apiHistoryData: ApiHistoryData) {
    let header = new Headers()
    header.append('Authorization', apiHistoryData.token);
    this.http.post<ApiHistoryData>(env.apiUrl  +  'track_history', apiHistoryData).subscribe(track => {
      console.log(track);
    });
  }

  getTrackHistory(apiHistoryData: ApiHistoryData) {
    let header = new Headers()
    header.append('Authorization', apiHistoryData.token);
    this.http.get<TrackHistory[]>(env.apiUrl + 'track_history').subscribe(tracks => {
      console.log(tracks);
    })
  }
}
