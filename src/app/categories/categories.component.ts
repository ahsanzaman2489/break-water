import {Component, OnInit} from '@angular/core';
import {ChuckService} from '../chuck.service';
import {AllActions} from '../actions/actions';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {select, select$, NgReduxModule, NgRedux} from '@angular-redux/store';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @select() categoryReducer: Observable<any>;
  @select() loadingReducer: Observable<any>;

  private categories;
  private loading;

  constructor(private router: Router, private actions: AllActions) {
  }

  ngOnInit() {
    this.actions.fetchCategories();
    this.categoryReducer.subscribe((data) => {
      this.categories = data.categories;
    });
    this.loadingReducer.subscribe(data => {
      this.loading = data.loading;
    });
  }

  fetchCategoryData(categoryName) {
    this.router.navigate(['/jokes', categoryName])
  }

}
