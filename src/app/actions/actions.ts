import {ChuckService} from '../chuck.service';
import {NgRedux} from '@angular-redux/store';
import {Injectable} from '@angular/core';

interface Response {
  result: Array<{}>
}

@Injectable({
  providedIn: 'root'
})


export class AllActions {
  constructor(public service: ChuckService, public ngRedux: NgRedux<any>) {
  }

  fetchCategories = () => {
    this.ngRedux.dispatch({type: 'LOADING_START'});
    const data = this.service.fetchCategories();
    data.subscribe((res) => {
      this.ngRedux.dispatch({type: 'FETCH_CATEGORIES', payload: res});
      this.ngRedux.dispatch({type: 'LOADING_DONE'});
    });
  }
  fetchJokes = (category) => {
    this.ngRedux.dispatch({type: 'LOADING_START'});
    const data = this.service.fetchJokes(category);
    data.subscribe((res: Response) => {
      this.ngRedux.dispatch({type: 'FETCH_JOKES', payload: res.result});
      this.ngRedux.dispatch({type: 'LOADING_DONE'});
    });
  }
  fetchFavourites = () => {
    this.ngRedux.dispatch({type: 'FETCH_FAVOURITE'});
  }
  AddToFavourite = (joke) => {
    this.ngRedux.dispatch({type: 'ADD_TO_FAVOURITE', payload: joke});
  }
  removeFromFavourite = (id) => {
    this.ngRedux.dispatch({type: 'REMOVE_FROM_FAVOURITE', payload: id});
  }

  updateFavouriteList = (jokes) => {
    this.ngRedux.dispatch({type: 'UPDATE_SORTED_LIST', payload: jokes});
  }

}
