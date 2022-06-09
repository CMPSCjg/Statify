import { Images } from './TopArtists';

export interface UserProfile {
  country: string;
  display_name: string;
  followers: { href: string; total: number };
  href: string;
  id: string;
  images: Images[];
  product: string;
  type: string;
  uri: string;
}
