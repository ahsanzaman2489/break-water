import {Component, OnInit} from '@angular/core';
import {ChuckService} from '../chuck.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  constructor(private service: ChuckService, private router: Router) {
  }

  private categories;

  ngOnInit() {
    const data = this.service.fetchCategories();
    data.subscribe((res) => {
      console.log(res)
      this.categories = res;
    })
  }

  fetchCategoryData(categoryName) {
    this.router.navigate(['/jokes', categoryName])
  }

}
