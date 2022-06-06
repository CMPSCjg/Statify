export interface Images {
  height: number;
  url: string;
  width: number;
}

export interface TopArtists {
  external_urls: { spotify: string };
  followers: { href: string; total: number };
  genres: string[];
  href: string;
  id: string;
  images: Images[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
