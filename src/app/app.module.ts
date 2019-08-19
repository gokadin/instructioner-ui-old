import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise } from './components/exercise/exercise';

import {reducerToken, reducerProvider} from '@app/reducers';
import services from '@app/services';
import effects from '@app/effects';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducerToken),
    StoreDevtoolsModule.instrument({
        maxAge: 25
    }),

    // effects
    EffectsModule.forRoot(effects),
    AppRoutingModule
  ],
  providers: [
        reducerProvider,
        services,
        Location,
        {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
