import {Component, Input, OnInit} from '@angular/core';
import {AllActions} from '../actions/actions';
import {Observable} from 'rxjs';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-single-joke',
  templateUrl: './single-joke.component.html',
  styleUrls: ['./single-joke.component.scss']
})
export class SingleJokeComponent implements OnInit {
  @Input() joke;
  @select() favouriteReducer: Observable<any>;

  constructor(public actions: AllActions) {
  }

  ngOnInit() {
    this.actions.fetchFavourites();
    this.favouriteReducer.subscribe(data => {
      const isFavourite = data.jokes.filter(item => item.id === this.joke.id);
      if (isFavourite.length > 0) this.joke.isFavourite = true;
      else this.joke.isFavourite = false;
    });
  }

  addToFavourite(joke) {
    this.actions.AddToFavourite(joke);
  }

  removeFromFavourite(id) {
    this.actions.removeFromFavourite(id);
  }
}
