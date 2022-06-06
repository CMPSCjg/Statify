import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/configuration/configuration';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginToSpotify() {
    console.log( { ... configuration})
    const origin = window.location.origin
    const scopes = configuration.applicationScopes.join("%20")
    window.location.href = `${configuration.spotifyAuthenticationUrl}?client_id=${configuration.applicationId}&redirect_uri=${origin}${configuration.authenticationSuccessfulRedirectUrl}&scope=${scopes}&response_type=token&show_dialog=true`
  }

}
