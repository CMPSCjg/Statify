export interface TopTracks {
  href: string;
  items: Array<object>;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}
