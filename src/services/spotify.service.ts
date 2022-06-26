import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import { TopArtists } from 'src/models/TopArtists';
import { TopTracks } from 'src/models/TopTracks';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(
    private readonly router: Router,
    private readonly cookieSvc: CookieService,
    private http: HttpClient
  ) {}

  getTopArtists(accessToken: string): Observable<TopArtists[]> {
    const headers = {
      Authorization: 'Bearer ' + accessToken,
    };

    const url = 'https://api.spotify.com/v1/me/top/artists';
    return this.http
      .get<TopArtists[]>(url, { headers })
      .pipe(catchError((error) => throwError(error.message || error)));
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

  handleError() {
    // Remove the cookie value as it is no longer valid.
    this.cookieSvc.delete('STATIFY_ACCESS_TOKEN');

    // Navigate user back to home page.
    this.router.navigate(['/']);
  }
}
