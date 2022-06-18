import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { TopArtists } from 'src/models/TopArtists';
import { TopTracks } from 'src/models/TopTracks';
import { SpotifyService } from 'src/services/spotify.service';
import { retrieveAccessToken } from 'src/helpers/retrieve-access-token';

import { UserProfile } from 'src/models/UserProfile';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  accessToken: any = '';
  topArtists: TopArtists[] = [];
  topTracks: TopTracks = { items: [] };
  genres: string[] = [];
  genreCountsMap = new Map<string, number>();
  genreCounts: object;
  artistImages: string[] = [];
  artistName: string[] = [];

  trackImages: string[] = [];
  trackName: string[] = [];

  userProfile: UserProfile;

  constructor(
    private cookieSvc: CookieService,
    private spotifySvc: SpotifyService
  ) {}

  ngOnInit(): void {
    // Check that a valid access_token has not already been generated and stored as a cookie value.
    if (this.cookieSvc.check('STATIFY_ACCESS_TOKEN')) {
      this.accessToken = this.cookieSvc.get('STATIFY_ACCESS_TOKEN');
    } else {
      // Create Date object to set up that this cookie value expires in 1 hour, the same time in which the Spotify access_token expires.
      const now = new Date();
      now.setHours(now.getHours() + 1);

      this.accessToken = retrieveAccessToken();
      this.cookieSvc.set(
        'STATIFY_ACCESS_TOKEN',
        this.accessToken,
        now,
        '/',
        '',
        true
      );
    }

    this.spotifySvc.getTopArtists(this.accessToken).then((data) => {
      if (!data) {
        return;
      }

      this.topArtists = data;
      this.artistImages = this.topArtists.map(
        (topArtist) => topArtist.images[0].url
      );
      this.artistName = this.topArtists.map((topArtists) => topArtists.name);

      this.topArtists.map((topArtist) =>
        topArtist.genres.forEach((genre) => {
          this.genres.push(genre);
        })
      );

      for (const genre of this.genres) {
        this.genreCountsMap.set(genre, Number(this.genreCountsMap.get(genre)));

        if (this.genreCountsMap.get(genre)) {
          this.genreCountsMap.set(
            genre,
            Number(this.genreCountsMap.get(genre)) + 1
          );
        } else {
          this.genreCountsMap.set(genre, 1);
        }
      }
      this.genreCounts = Object.fromEntries(this.genreCountsMap);
    });

    this.spotifySvc.getTopTracks(this.accessToken).then((data) => {
      if (!data) {
        return;
      }

      this.topTracks = data;
      this.trackImages = this.topTracks.items.map(
        (topTracks) => topTracks.album.images[0].url
      );
      this.trackName = this.topTracks.items.map((topTracks) => topTracks.name);
    });

    this.spotifySvc.getUserProfile(this.accessToken).then((data) => {
      if (!data) {
        return;
      }

      this.userProfile = data;
    });
  }
}
