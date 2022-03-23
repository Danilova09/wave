import { Pipe, PipeTransform } from '@angular/core';
import { Album } from '../models/album.model';

@Pipe({
  name: 'albums'
})
export class AlbumsPipe implements PipeTransform {
  transform(albums: Album[] | null):  Album[] | null {
    if (!albums) {
      return albums;
    }

    return albums.filter(album => album.isPublished);
  }
}
