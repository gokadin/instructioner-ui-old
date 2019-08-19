import {ActivityList} from '@app/modules/activity/activityList/activityList';
import {Create} from '@app/modules/activity/create/create';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';

import {ActivityRouting} from "@app/modules/activity/activity.routing";
import {Activity} from '@app/modules/activity/activity';

@NgModule({
    imports: [
        SharedModule,
        ActivityRouting,
    ],
    declarations: [
        Activity,
    ]
})
export class ActivityModule {
}
