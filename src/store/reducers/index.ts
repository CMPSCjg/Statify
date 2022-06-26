import { InjectionToken } from '@angular/core';
import { ActionReducerMap, Action, MetaReducer } from '@ngrx/store';

import { AppState } from '../../models/AppState';
import * as fromResults from './results.reducer';

export const metaReducers: MetaReducer<any>[] = [];

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<AppState, Action>
>('Root reducers token', {
  factory: () => ({
    results: fromResults.reducer,
  }),
});
