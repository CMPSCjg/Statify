export interface Images {
  height: number;
  url: string;
  width: number;
}

// export interface TopTracks {
//   href: string;
//   name: string;
//   images: Images[];
//   album: Array<object>;
//   items: Array<object>;
//   limit: number;
//   next: string | null;
//   offset: number;
//   previous: string | null;
//   total: number;
// }

export interface Album {
  images: Array<Images>
  name: string
}

export interface Track {   album: Album }

export interface TopTracks {   items: Array<Track> }
