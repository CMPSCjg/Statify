import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { configuration } from 'src/configuration/configuration';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(private cookieSvc: CookieService, private router: Router) {}

  ngOnInit(): void {}

  loginToSpotify() {
    // Check that a valid access_token has not already been generated and stored as a cookie value.
    if (this.cookieSvc.check('STATIFY_ACCESS_TOKEN')) {
      this.router.navigate(['results']);
    } else {
      const origin = window.location.origin;
      const scopes = configuration.applicationScopes.join('%20');
      window.location.href = `${configuration.spotifyAuthenticationUrl}?client_id=${configuration.applicationId}&redirect_uri=${origin}${configuration.authenticationSuccessfulRedirectUrl}&scope=${scopes}&response_type=token&show_dialog=true`;
    }
  }

  get buttonLabel(): string {
    // Display the appropriate button label based if the user has already authenticated with Spotify already.
    return this.cookieSvc.check('STATIFY_ACCESS_TOKEN')
      ? 'View your results'
      : 'Login with Spotify';
  }
}
