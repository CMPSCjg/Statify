import { createAction, props } from '@ngrx/store';
import { TopArtists } from 'src/models/TopArtists';

export enum ResultsActionTypes {
  LoadTopArtists = '[Results] Load Top Artists',
  LoadTopArtistsSuccess = '[Results] Load Top Artists Success',
  LoadTopArtistsFailure = '[Results] Load Top Artists Failure',
}

export const LoadTopArtists = createAction(ResultsActionTypes.LoadTopArtists);

export const LoadTopArtistsSuccess = createAction(
  ResultsActionTypes.LoadTopArtistsSuccess,
  props<{ payload: TopArtists[] }>()
);

export const LoadTopArtistsFailure = createAction(
  ResultsActionTypes.LoadTopArtistsFailure,
  props<{ payload: any }>()
);
