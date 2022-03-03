export class Album {
  constructor(
    public id: string,
    public title: string,
    public artist: string,
    public releaseDate: string,
    public image: string,
  ) {}
}

export interface ApiAlbumData {
  _id: string,
  title: string,
  artist: string,
  image: string,
  releaseDate: string,
}
