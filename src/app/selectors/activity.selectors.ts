import {Store} from '@ngrx/store';

export class ActivitySelectors {
    constructor(private store: Store<any>) { }

    getActivities = () => this.store.select(state => state.activity.activities.toJs());

    getForm = () => this.store.select(state => state.activity.form.toJs());

    getActivity = () => this.store.select(state => state.activity.activity.toJs());
}