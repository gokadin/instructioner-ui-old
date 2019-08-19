import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import selectorClasses from '@app/selectors';

@Injectable()
export class ReduxService {
    private resolvedSelectors;

    constructor(private store: Store<any>) {
        this.resolvedSelectors = {};
    }

    dispatch(action): void {
        this.store.dispatch(action);
    }

    selectors(selectorName: string) {
        if (!this.resolvedSelectors[selectorName]) {
            this.resolvedSelectors[selectorName] = new selectorClasses[selectorName](this.store);
        }

        return this.resolvedSelectors[selectorName];
    }
}