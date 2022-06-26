import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as fromViews from '../views/index';
import * as fromComponents from '../components/index';

import { SpotifyService } from 'src/services/spotify.service';
import { metaReducers, ROOT_REDUCERS } from 'src/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from 'src/store/effects';

@NgModule({
  declarations: [AppComponent, fromViews.views, fromComponents.components],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
      },
    }),
    EffectsModule.forFeature(effects),
  ],
  providers: [CookieService, SpotifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
