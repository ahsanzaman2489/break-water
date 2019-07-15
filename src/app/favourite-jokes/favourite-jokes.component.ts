import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.jokes, event.previousIndex, event.currentIndex);
    this.actions.updateFavouriteList(this.jokes);
  }

  addToFavourite(joke) {
    this.actions.AddToFavourite(joke);
  }

  removeFromFavourite(id) {
    this.actions.removeFromFavourite(id);
  }
}
