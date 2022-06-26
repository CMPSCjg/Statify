import { createReducer, on } from '@ngrx/store';
import { ResultsState } from 'src/models/ResultsState';
import { ResultsActions } from '../actions';

export const initialState: ResultsState = {
  isLoadingTopArtistsData: false,
  isLoadingTopTracksData: false,
  topArtistsData: [],
};

export const reducer = createReducer(
  initialState,
  on(ResultsActions.LoadTopArtists, (state) => ({
    ...state,
    isLoadingTopArtistsData: true,
  })),
  on(ResultsActions.LoadTopArtistsSuccess, (state, payload) => ({
    ...state,
    isLoadingTopArtistsData: false,
    topArtistsData: payload.payload,
  })),
  on(ResultsActions.LoadTopArtistsFailure, (state, payload) => ({
    ...state,
    isLoadingTopArtistsData: false,
    topArtistsData: payload.payload,
  }))
);

export const getIsLoadingTopArtistsData = (state: ResultsState) =>
  state.isLoadingTopArtistsData;
export const getIsLoadingTopTracksData = (state: ResultsState) =>
  state.isLoadingTopTracksData;
export const getTopArtistsData = (state: ResultsState) => state.topArtistsData;
