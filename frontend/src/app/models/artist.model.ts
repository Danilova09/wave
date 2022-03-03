export class Artist {
  constructor(
    public id: string,
    public name: string,
    public image: string,
    public info: string,
  ) {}
}

export interface ApiArtistData {
  _id: string,
  name: string,
  image: string,
  info: string,
}
