import {Action} from '@ngrx/store';
import {List, Entity} from '@app/utils/immutable';
import {Form, FormField, FormFieldValidation} from '@app/utils/form';

export interface ActivityState {
    activities: any;
    form: any;
    activity: any;
}

export const initialState = {
    activities: new List(),
    activity: new Entity(),
    form: new Form({
        name: new FormField('name', '', [
            new FormFieldValidation('required', 'Name is required.')
        ]),
        rate: new FormField('rate', '', [
            new FormFieldValidation('required', 'Rate is required.')
        ])
    })
};

export enum ActivityActionTypes {
    FETCH = 'ACTIVITY_FETCH',
    FETCH_SUCCESS = 'ACTIVITY_FETCH_SUCCESS',
    FETCH_FAILURE = 'ACTIVITY_FETCH_FAILURE',
    UPDATE_FORM = 'ACTIVITY_UPDATE_FORM',
    UPDATE_FORM_SUCCESS = 'ACTIVITY_UPDATE_FORM_SUCCESS',
    UPDATE_FORM_FAILURE = 'ACTIVITY_UPDATE_FORM_FAILURE',
    CREATE = 'ACTIVITY_CREATE',
    CREATE_SUCCESS = 'ACTIVITY_CREATE_SUCCESS',
    CREATE_FAILURE = 'ACTIVITY_CREATE_FAILURE',
    DELETE = 'ACTIVITY_DELETE',
    DELETE_SUCCESS = 'ACTIVITY_DELETE_SUCCESS',
    DELETE_FAILURE = 'ACTIVITY_DELETE_FAILURE',
    FETCH_ACTIVITY = 'ACTIVITY_FETCH_ACTIVITY',
    FETCH_ACTIVITY_SUCCESS = 'ACTIVITY_FETCH_ACTIVITY_SUCCESS',
    FETCH_ACTIVITY_FAILURE = 'ACTIVITY_FETCH_ACTIVITY_FAILURE',
}

export class Fetch implements Action {
    readonly type = ActivityActionTypes.FETCH;
    constructor(public payload: any = {}) {}
}

export class FetchSuccess implements Action {
    readonly type = ActivityActionTypes.FETCH_SUCCESS;
    constructor(public payload: any = {}) {}
}

export class FetchFailure implements Action {
    readonly type = ActivityActionTypes.FETCH_FAILURE;
    constructor(public payload: any = {}) {}
}

export class UpdateForm implements Action {
    readonly type = ActivityActionTypes.UPDATE_FORM;
    constructor(public payload: any = {}) {}
}

export class UpdateFormSuccess implements Action {
    readonly type = ActivityActionTypes.UPDATE_FORM_SUCCESS;
    constructor(public payload: any = {}) {}
}

export class UpdateFormFailure implements Action {
    readonly type = ActivityActionTypes.UPDATE_FORM_FAILURE;
    constructor(public payload: any = {}) {}
}

export class Create implements Action {
    readonly type = ActivityActionTypes.CREATE;
    constructor(public payload: any = {}) {}
}

export class CreateSuccess implements Action {
    readonly type = ActivityActionTypes.CREATE_SUCCESS;
    constructor(public payload: any = {}) {}
}

export class CreateFailure implements Action {
    readonly type = ActivityActionTypes.CREATE_FAILURE;
    constructor(public payload: any = {}) {}
}

export class Delete implements Action {
    readonly type = ActivityActionTypes.DELETE;
    constructor(public payload: any = {}) {}
}

export class DeleteSuccess implements Action {
    readonly type = ActivityActionTypes.DELETE_SUCCESS;
    constructor(public payload: any = {}) {}
}

export class DeleteFailure implements Action {
    readonly type = ActivityActionTypes.DELETE_FAILURE;
    constructor(public payload: any = {}) {}
}

export class FetchActivity implements Action {
    readonly type = ActivityActionTypes.FETCH_ACTIVITY;
    constructor(public payload: any = {}) {}
}

export class FetchActivitySuccess implements Action {
    readonly type = ActivityActionTypes.FETCH_ACTIVITY_SUCCESS;
    constructor(public payload: any = {}) {}
}

export class FetchActivityFailure implements Action {
    readonly type = ActivityActionTypes.FETCH_ACTIVITY_FAILURE;
    constructor(public payload: any = {}) {}
}

export type ActivityActions =
    | Fetch
    | FetchSuccess
    | FetchFailure
    | UpdateForm
    | UpdateFormSuccess
    | UpdateFormFailure
    | Create
    | CreateSuccess
    | CreateFailure
    | Delete
    | DeleteSuccess
    | DeleteFailure
    | FetchActivity
    | FetchActivitySuccess
    | FetchActivityFailure;

const activities = (state: any, action: any, args: any = {}) => {
    switch (action.type) {
        case ActivityActionTypes.FETCH_SUCCESS:
            return new List(action.payload);
        case ActivityActionTypes.CREATE_SUCCESS:
            return state.add(action.payload);
        case ActivityActionTypes.DELETE_SUCCESS:
            return state.remove(action.payload);
        default:
            return state;
    }
};

const form = (state: any, action: any, args: any = {}) => {
    switch (action.type) {
        case ActivityActionTypes.UPDATE_FORM:
            return state.updateForm(action.payload);
        default:
            return state;
    }
};

const activity = (state: any, action: any, args: any = {}) => {
    switch (action.type) {
        case ActivityActionTypes.FETCH_ACTIVITY_SUCCESS:
            return new Entity(action.payload);
        default:
            return state;
    }
};

export const activityReducer = (state: ActivityState = initialState, action: any) => {
    switch (action.type) {
        case ActivityActionTypes.FETCH_SUCCESS:
            return Object.assign({}, state, {
                activities: activities(state.activities, action),
            });
        case ActivityActionTypes.UPDATE_FORM:
            return Object.assign({}, state, {
                form: form(state.form, action),
            });
        case ActivityActionTypes.CREATE_SUCCESS:
            return Object.assign({}, state, {
                activities: activities(state.activities, action),
            });
        case ActivityActionTypes.DELETE_SUCCESS:
            return Object.assign({}, state, {
                activities: activities(state.activities, action),
            });
        case ActivityActionTypes.FETCH_ACTIVITY_SUCCESS:
            return Object.assign({}, state, {
                activity: activity(state.activity, action),
            });
        default:
            return state;
    }
};