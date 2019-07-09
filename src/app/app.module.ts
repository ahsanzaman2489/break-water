import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CategoriesComponent} from './categories/categories.component';
import {HttpClientModule} from '@angular/common/http';
import { JokesComponent } from './jokes/jokes.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    JokesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
