import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { TopArtists } from 'src/models/TopArtists';
import { SpotifyService } from 'src/services/spotify.service';
import { ResultsActions } from '../actions';

@Injectable()
export class ResultsEffects {
  accessToken: string;
  constructor(
    private readonly spotifySvc: SpotifyService,
    private readonly actions$: Actions
  ) {
    this.accessToken = 'blagh';
  }

  loadTop = createEffect(() =>
    this.actions$.pipe(
      ofType(ResultsActions.LoadTopArtists),
      switchMap(() => {
        return this.spotifySvc.getTopArtists(this.accessToken).pipe(
          map((data: TopArtists[]) =>
            ResultsActions.LoadTopArtistsSuccess({ payload: data })
          ),
          catchError((error) =>
            of(ResultsActions.LoadTopArtistsFailure({ payload: error }))
          )
        );
      })
    )
  );
}
