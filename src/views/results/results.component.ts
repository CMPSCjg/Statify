import { Component, OnInit } from '@angular/core';
import { TopArtists } from 'src/models/TopArtists';
import { TopTracks } from 'src/models/TopTracks';
import { SpotifyService } from 'src/services/spotify.service';

import { retrieveAccessToken } from '../../helpers/retrieve-access-token';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  accessToken: string = '';
  topArtists: TopArtists[] = [];
  topTracks: TopTracks[] = [];
  images: string[] = [];
  name: string[] = [];

  constructor(private spotifySvc: SpotifyService) {}

  ngOnInit(): void {
    this.accessToken = retrieveAccessToken();
    this.spotifySvc.getTopArtists(this.accessToken).then((data) => {
      this.topArtists = data;
      this.images = this.topArtists.map((topArtist) => topArtist.images[0].url);
      this.name = this.topArtists.map((topArtists) => topArtists.name);
    });
    this.spotifySvc.getTopTracks(this.accessToken).then((data) => {
      debugger;
      this.topTracks = data;
    });
  }
}
