import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/services/spotify.service';

import { retrieveAccessToken } from '../../helpers/retrieve-access-token'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  accessToken: string = ''
  topArtists = []

  constructor(private spotifySvc: SpotifyService) { 

  }

  ngOnInit(): void {
    this.accessToken = retrieveAccessToken()
    this.spotifySvc.getTopArtists(this.accessToken).then(data => {
      this.topArtists = data
      console.log('Top artists set: ' + this.topArtists)
    })
  }

}
