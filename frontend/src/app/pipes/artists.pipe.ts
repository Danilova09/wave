import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from '../models/artist.model';

@Pipe({
  name: 'artists'
})
export class ArtistsPipe implements PipeTransform {
  transform(artists: Artist[] | null):  Artist[] | null {
    if (!artists) {
      return artists;
    }

    return artists.filter(artist => artist.isPublished);
  }
}

