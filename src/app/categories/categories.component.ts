import {Component, OnInit} from '@angular/core';
import {AllActions} from '../actions/actions';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {select} from '@angular-redux/store';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @select() categoryReducer: Observable<any>;
  @select() loadingReducer: Observable<any>;

  public categories;
  public loading;

  constructor(public router: Router, public actions: AllActions) {
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
