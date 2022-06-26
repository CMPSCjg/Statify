import { AfterViewInit, Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Chart, ChartType, registerables } from 'chart.js';

import { TopArtists } from 'src/models/TopArtists';
import { TopTracks } from 'src/models/TopTracks';
import { SpotifyService } from 'src/services/spotify.service';
import { retrieveAccessToken } from 'src/helpers/retrieve-access-token';
import { AppState } from 'src/models/AppState';
import { Store } from '@ngrx/store';
import { ResultsActions } from 'src/store/actions';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements AfterViewInit {
  isLoading = true;
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

  constructor(
    private readonly store: Store<AppState>,
    private readonly cookieSvc: CookieService,
    private readonly spotifySvc: SpotifyService
  ) {
    this.store.dispatch(ResultsActions.LoadTopArtists());
    this.genreCounts = null;
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.isLoading = false;

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

    // this.spotifySvc.getTopArtists(this.accessToken).then((data) => {
    //   if (!data) {
    //     return;
    //   }

    //   this.topArtists = data;
    //   this.artistImages = this.topArtists.map(
    //     (topArtist) => topArtist.images[0].url
    //   );
    //   this.artistName = this.topArtists.map((topArtists) => topArtists.name);

    //   this.topArtists.map((topArtist) =>
    //     topArtist.genres.forEach((genre) => {
    //       this.genres.push(genre);
    //     })
    //   );

    //   for (const genre of this.genres) {
    //     this.genreCountsMap.set(genre, Number(this.genreCountsMap.get(genre)));

    //     if (this.genreCountsMap.get(genre)) {
    //       this.genreCountsMap.set(
    //         genre,
    //         Number(this.genreCountsMap.get(genre)) + 1
    //       );
    //     } else {
    //       this.genreCountsMap.set(genre, 1);
    //     }
    //   }

    //   this.genreCounts = Object.fromEntries(this.genreCountsMap);
    //   const arrayKeys = Object.keys(this.genreCounts);
    //   const arrayValues = Object.values(this.genreCounts);
    //   const pieChartRgbs = [];

    //   for (let i = 0; i < arrayKeys.length; i++) {
    //     let rgbString = 'rgb(';

    //     // Generate random red, blue color
    //     const r = (Math.random() * 256) | 0;
    //     const g = (Math.random() * 256) | 0;
    //     const b = (Math.random() * 256) | 0;
    //     rgbString += '' + r + ', ' + g + ', ' + b;

    //     rgbString += ')';
    //     pieChartRgbs.push(rgbString);
    //   }

    //   const lineChartType: ChartType = 'pie';

    //   const chartData = {
    //     labels: arrayKeys,
    //     datasets: [
    //       {
    //         label: 'Genre Popularity',
    //         backgroundColor: pieChartRgbs,
    //         hoverOffset: 4,
    //         spacing: 5,
    //         data: arrayValues,
    //       },
    //     ],
    //   };

    //   const config = {
    //     type: lineChartType,
    //     data: chartData,
    //     options: {},
    //   };

    //   Chart.defaults.color = 'white';
    //   Chart.defaults.font.size = 16;
    //   const element: HTMLCanvasElement = document.getElementById(
    //     'myChart'
    //   ) as HTMLCanvasElement;
    //   const myChart = new Chart(element, config);
    // });

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
  }
}
