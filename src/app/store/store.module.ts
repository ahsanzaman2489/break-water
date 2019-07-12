import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import {provideReduxForms} from '@angular-redux/form';
import {NgReduxRouter, NgReduxRouterModule} from '@angular-redux/router';
import {
  DevToolsExtension,
  NgRedux,
  NgReduxModule,
} from '@angular-redux/store';

import {createLogger} from 'redux-logger';


// The top-level reducers and epics that make up our app's logic.
import {initialAppState} from './state';
import {rootReducer} from '../reducers/rootReducer';

@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule.forRoot(), CommonModule],
})
export class StoreModule {
  constructor(
    public store: NgRedux<any>,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
  ) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.


    store.configureStore(
      rootReducer,
      initialAppState(),
      [createLogger()],
      // configure store typings conflict with devTools typings
      (devTools.isEnabled() ? [devTools.enhancer()] : []) as any,
    );


    // Enable syncing of Angular router state with our Redux store.
    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }

    // Enable syncing of Angular form state with our Redux store.
    provideReduxForms(store);
  }
}
