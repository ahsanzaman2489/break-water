import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CategoriesComponent} from './categories/categories.component';
import {HttpClientModule} from '@angular/common/http';
import {JokesComponent} from './jokes/jokes.component';
import {MatListModule, MatToolbarModule, MatMenuModule, MatIconModule} from '@angular/material';
import { NotFoundComponent } from './not-found/not-found.component';
import { FavouriteJokesComponent } from './favourite-jokes/favourite-jokes.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    JokesComponent,
    NotFoundComponent,
    FavouriteJokesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
