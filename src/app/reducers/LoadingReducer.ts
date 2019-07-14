import {Action} from 'redux';


const INITIAL_STATE = {
  loading: false
};

// A higher-order reducer: accepts an animal type and returns a reducer
// that only responds to actions for that particular animal type.

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOADING_START':
      return {
        ...state,
        loading: true,
      };
    case 'LOADING_DONE':
      return {
        ...state,
        loading: false,
      };
  }

  return state;
};
