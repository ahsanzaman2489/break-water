import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @select() loadingReducer: Observable<any>;
  private loading;

  ngOnInit() {
    this.loadingReducer.subscribe(data => {
      this.loading = data.loading;
    });
  }
  
}
