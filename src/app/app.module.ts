import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromViews from '../views/index';

import { SpotifyService } from 'src/services/spotify.service';

@NgModule({
  declarations: [AppComponent, fromViews.views],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CookieService, SpotifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
