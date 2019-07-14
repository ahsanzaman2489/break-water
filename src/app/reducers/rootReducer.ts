import {routerReducer} from '@angular-redux/router/';
import {combineReducers} from 'redux';

import categoryReducer from './cateogryReducer';
import jokesReducer from './jokesReducer';
import favouriteReducer from './favouriteReducer';
import loadingReducer from './LoadingReducer';


// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = combineReducers({
  categoryReducer,
  jokesReducer,
  favouriteReducer,
  loadingReducer,
  router: routerReducer,
});
