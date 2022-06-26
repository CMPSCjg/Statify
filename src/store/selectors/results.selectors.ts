import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResultsState } from 'src/models/ResultsState';
import {
  getIsLoadingTopArtistsData,
  getIsLoadingTopTracksData,
  getTopArtistsData,
} from '../reducers/results.reducer';

export const getResultsState = createFeatureSelector<ResultsState>('results');

export const selectIsLoadingTopArtistsData = createSelector(
  getResultsState,
  getIsLoadingTopArtistsData
);

export const selectIsLoadingTopTracksData = createSelector(
  getResultsState,
  getIsLoadingTopTracksData
);

export const selectIsTopArtistsData = createSelector(
  getResultsState,
  getTopArtistsData
);
