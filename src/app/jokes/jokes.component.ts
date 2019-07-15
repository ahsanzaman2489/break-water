import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AllActions} from '../actions/actions';
import {MatListModule} from '@angular/material/list';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
  providers: [MatListModule]
})


export class JokesComponent implements OnInit {
  @select() jokesReducer: Observable<any>;
  @select() loadingReducer: Observable<any>;

  public jokes;
  public loading;

  constructor(public actions: AllActions, public Router: Router, public route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.actions.fetchJokes(params.category);
    });

    this.jokesReducer.subscribe((data) => {
      this.jokes = data.jokes;
    });

    this.loadingReducer.subscribe(data => {
      this.loading = data.loading;
    });
  }

}
