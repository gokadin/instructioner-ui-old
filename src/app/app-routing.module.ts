import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFound } from './pages/notFound/notFound';


const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/activity/activity.module#ActivityModule'
  },
  {
    path: '**',
    component: NotFound
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
