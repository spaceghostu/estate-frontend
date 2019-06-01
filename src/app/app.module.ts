import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeLogger } from 'ngrx-store-logger';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { appReducer } from './app.reducer';
import { environment } from '../environments/environment';
import { PagesModule } from './pages/pages.module';
import { MaterialsModule } from './materials/materials.module';
import { ComponentsModule } from './components/components.module';

export const debug = (reducer: ActionReducer<any>): ActionReducer<any> =>
  storeLogger()(reducer);
export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({
      appReducer,
    }, {
      metaReducers,
    }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    PagesModule,
    BrowserAnimationsModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule { }
