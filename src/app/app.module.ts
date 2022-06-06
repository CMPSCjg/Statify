import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromViews from '../views/index'

import { SpotifyService } from 'src/services/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    fromViews.views
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
