import { Pipe, PipeTransform } from '@angular/core';
import { Track } from '../models/track.model';

@Pipe({
  name: 'tracks'
})
export class TracksPipe implements PipeTransform {
  transform(tracks: Track[] | null | undefined):  Track[] | null | undefined {
    if (!tracks) {
      return tracks;
    }

    return tracks.filter(track => track.isPublished);
  }
}
