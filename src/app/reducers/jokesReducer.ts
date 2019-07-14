import {Action} from 'redux';


const INITIAL_STATE = {
};

// A higher-order reducer: accepts an animal type and returns a reducer
// that only responds to actions for that particular animal type.

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_JOKES':
      return {
        ...state,
        jokes: action.payload,
      };
  }

  return state;
};
