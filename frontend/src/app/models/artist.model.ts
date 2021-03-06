export interface Artist {
  _id: string,
  name: string,
  info: string,
  image: string,
  isPublished: boolean,
}

export interface ArtistData {
  [key: string]: any,
  name: string,
  info: string,
  image: File,
}
