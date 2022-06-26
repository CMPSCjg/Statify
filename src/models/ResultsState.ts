import { TopArtists } from './TopArtists';

export interface ResultsState {
  isLoadingTopArtistsData: boolean;
  isLoadingTopTracksData: boolean;
  topArtistsData: TopArtists[];
}
