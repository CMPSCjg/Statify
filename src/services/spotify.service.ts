import { Injectable } from '@angular/core';
import * as axios from 'axios';
import { TopArtists } from 'src/models/TopArtists';
import { TopTracks } from 'src/models/TopTracks';
import { UserProfile } from 'src/models/UserProfile';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  async getTopArtists(accessToken: string): Promise<TopArtists[]> {
    const headers = {
      Authorization: 'Bearer ' + accessToken,
    };
    const topArtists: TopArtists[] = await axios.default
      .get('https://api.spotify.com/v1/me/top/artists', { headers })
      .then((response) => response.data.items);

    return Promise.resolve(topArtists);
  }

  async getTopTracks(accessToken: string): Promise<TopTracks> {
    const headers = {
      Authorization: 'Bearer ' + accessToken,
    };
    const topTracks: TopTracks = await axios.default
      .get('https://api.spotify.com/v1/me/top/tracks', { headers })
      .then((response) => response.data);

    return Promise.resolve(topTracks);
  }

  async getUserProfile(accessToken: string): Promise<UserProfile> {
    const headers = {
      Authorization: 'Bearer ' + accessToken,
    };
    const userProfile: UserProfile = await axios.default
      .get('https://api.spotify.com/v1/me', { headers })
      .then((response) => response.data);

    return Promise.resolve(userProfile);
  }
}
