import {routerReducer} from '@angular-redux/router/';
import {combineReducers} from 'redux';

import categoryReducer from './cateogryReducer';


// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = combineReducers({
  categoryReducer,
  router: routerReducer,
})
