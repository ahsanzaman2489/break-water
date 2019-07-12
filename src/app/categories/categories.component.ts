import {Component, OnInit} from '@angular/core';
import {ChuckService} from '../chuck.service';
import {Router} from "@angular/router";
import {Observable} from 'rxjs';
import {select, select$, NgReduxModule, NgRedux} from '@angular-redux/store';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @select() categoryReducer: Observable<any>;

  constructor(private service: ChuckService, private router: Router, private ngRedux: NgRedux<any>) {
  }

  private categories;

  ngOnInit() {

    this.categoryReducer.subscribe((data) => {
      this.categories = data.categories;
    })


    const data = this.service.fetchCategories();
    data.subscribe((res) => {
      this.ngRedux.dispatch({type: 'FETCH_CATEGORIES', payload: res});
    })
  }

  fetchCategoryData(categoryName) {
    this.router.navigate(['/jokes', categoryName])
  }

}
