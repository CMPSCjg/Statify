import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import { TopArtists } from 'src/models/TopArtists';
import { TopTracks } from 'src/models/TopTracks';
import { UserProfile } from 'src/models/UserProfile';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(
    private readonly router: Router,
    private readonly cookieSvc: CookieService
  ) {}

  async getTopArtists(accessToken: string): Promise<TopArtists[]> {
    const headers = {
      Authorization: 'Bearer ' + accessToken,
    };

    try {
      const topArtists: TopArtists[] = await axios.default
        .get('https://api.spotify.com/v1/me/top/artists', { headers })
        .then((response) => response?.data?.items);

      return Promise.resolve(topArtists);
    } catch (error) {
      return Promise.resolve(null);
    }
  }

  async getTopTracks(accessToken: string): Promise<TopTracks> {
    const headers = {
      Authorization: 'Bearer ' + accessToken,
    };

    try {
      const topTracks: TopTracks = await axios.default
        .get('https://api.spotify.com/v1/me/top/tracks', { headers })
        .then((response) => response?.data)
        .catch(() => this.handleError());

      return Promise.resolve(topTracks);
    } catch (error) {
      return Promise.resolve(null);
    }
  }

  async getUserProfile(accessToken: string): Promise<UserProfile> {
    return Promise.resolve(null);
    const headers = {
      Authorization: 'Bearer ' + accessToken,
    };

    try {
      const userProfile: UserProfile = await axios.default
        .get('https://api.spotify.com/v1/me', { headers })
        .then((response) => response?.data)
        .catch(() => this.handleError());

      return Promise.resolve(userProfile);
    } catch (error) {
      
    }
  }

  handleError() {
    // Remove the cookie value as it is no longer valid.
    this.cookieSvc.delete('STATIFY_ACCESS_TOKEN');

    // Navigate user back to home page.
    this.router.navigate(['/']);
  }
}
