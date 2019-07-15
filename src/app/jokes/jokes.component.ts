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

  private jokes;
  private loading;

  constructor(private actions: AllActions, private Router: Router, private route: ActivatedRoute) {
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
