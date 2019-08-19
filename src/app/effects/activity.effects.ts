import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from "rxjs";
import {AppState} from '@app/reducers';
import {Store} from "@ngrx/store";
import {switchMap, map, catchError} from 'rxjs/operators';
import {EngineService} from '@app/services/engine.service';
import {
    ActivityActionTypes,
    Fetch,
    FetchSuccess,
    FetchFailure,
    Create,
    CreateSuccess,
    CreateFailure,
    Delete,
    DeleteSuccess,
    DeleteFailure,
    FetchActivity,
    FetchActivitySuccess,
    FetchActivityFailure,
} from '@app/reducers/activity.reducer';

@Injectable()
export class ActivityEffects {
    constructor(private actions$: Actions,
                private store$: Store<AppState>,
                private engineService: EngineService
    ) { }

    @Effect() fetch = this.actions$
        .ofType<Fetch>(ActivityActionTypes.FETCH)
        .pipe(
            map(action => action.payload),
            switchMap(payload => this.engineService.fetch('activity')
                .send(
                    data => new FetchSuccess(data.activity),
                    error => new FetchFailure(error)
                ))
        );

    @Effect() create = this.actions$
        .ofType<Create>(ActivityActionTypes.CREATE)
        .pipe(
            map(action => action.payload),
            switchMap(payload => this.engineService.create('activity', payload)
                .send(
                    data => new CreateSuccess(data.activity),
                    error => new CreateFailure(error)
                ))
        );

    @Effect() delete = this.actions$
        .ofType<Delete>(ActivityActionTypes.DELETE)
        .pipe(
            map(action => action.payload),
            switchMap(payload => this.engineService.delete('activity', payload)
                .send(
                    data => new DeleteSuccess(payload),
                    error => new DeleteFailure(error)
                ))
        );

    @Effect() fetchActivity = this.actions$
        .ofType<FetchActivity>(ActivityActionTypes.FETCH_ACTIVITY)
        .pipe(
            map(action => action.payload),
            switchMap(payload => this.engineService.fetch('activity')
                .whereId(payload)
                .send(
                    data => new FetchActivitySuccess(data.activity),
                    error => new FetchActivityFailure(error)
                ))
        );
}