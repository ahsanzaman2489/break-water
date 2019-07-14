import {Action} from 'redux';


const INITIAL_STATE = {};

// A higher-order reducer: accepts an animal type and returns a reducer
// that only responds to actions for that particular animal type.

export default (state = INITIAL_STATE, action) => {
  const favouriteJokes = JSON.parse(localStorage.getItem('favouriteJokes') || '[]');

  switch (action.type) {
    case 'FETCH_FAVOURITE':
      return {
        ...state,
        jokes: favouriteJokes,
      };
    case 'ADD_TO_FAVOURITE':
      action.payload.isFavourite = true;
      favouriteJokes.push(action.payload);
      localStorage.setItem('favouriteJokes', JSON.stringify(favouriteJokes));
      return {
        ...state,
        jokes: [...state.jokes, action.payload],
      };
    case 'REMOVE_FROM_FAVOURITE':
      const newArray = favouriteJokes.filter(item => item.id !== action.payload);
      localStorage.setItem('favouriteJokes', JSON.stringify(newArray));
      return {
        ...state,
        jokes: newArray,
      };
    case 'UPDATE_SORTED_LIST':
      localStorage.setItem('favouriteJokes', JSON.stringify(action.payload));
      return {
        ...state,
      };
  }


  return state;
};
