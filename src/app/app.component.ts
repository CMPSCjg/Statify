import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MusicVisulation';

  constructor() {}

  ngOnInit() {}

  loginToSpotify() {
    console.log('Login to spotify. . .')
  }
}
