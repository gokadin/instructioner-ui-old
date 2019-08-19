import {ActionReducerMap} from '@ngrx/store';
import {InjectionToken} from '@angular/core';
import {ActivityState, activityReducer} from '@app/reducers/activity.reducer';

export interface AppState {
    activity: ActivityState
}

export const reducerToken = new InjectionToken<ActionReducerMap<AppState>>('Reducers');

export function getReducers() {
    return {
        activity: activityReducer
    };
}

export const reducerProvider = [
    { provide: reducerToken, useFactory: getReducers }
];
