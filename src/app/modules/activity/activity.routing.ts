import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Activity} from '@app/modules/activity/activity';

const routes = [
    {
        path: '',
        component: Activity,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActivityRouting {}
