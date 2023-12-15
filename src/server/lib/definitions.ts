import type { CDArt } from "./SearchResults/definitions";

export interface MusicResponse {
    name: string;
    mbid_id: string;
    musiclogo: Array<Image>;
    albums: { [key: string]: Album };
    artistthumb: Array<Image>;
    artistbackground: Array<Image>;
    hdmusiclogo: Array<Image>;
    musicbanner: Array<Image>;
  }

  export interface Image {
    id: string;
    url: string;
    likes: string;
    disc?: string;
    size?: string;
}

export interface Album {
    albumcover: Array<Image>;
    cdart: Array<CDArt>;
}