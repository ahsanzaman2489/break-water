import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select} from '@angular-redux/store';
import {AllActions} from '../actions/actions';

@Component({
  selector: 'app-favourite-jokes',
  templateUrl: './favourite-jokes.component.html',
  styleUrls: ['./favourite-jokes.component.scss']
})
export class FavouriteJokesComponent implements OnInit {
  @select() favouriteReducer: Observable<any>;
  private jokes;


  constructor(private actions: AllActions) {
  }

  ngOnInit() {
    this.actions.fetchFavourites();
    this.favouriteReducer.subscribe((data) => {
      this.jokes = data.jokes;
    });
  }

}
