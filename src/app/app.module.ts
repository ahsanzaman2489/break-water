import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgReduxModule, NgRedux} from '@angular-redux/store';
import {NgReduxRouterModule} from '@angular-redux/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CategoriesComponent} from './categories/categories.component';
import {HttpClientModule} from '@angular/common/http';
import {JokesComponent} from './jokes/jokes.component';
import {
  MatListModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NotFoundComponent} from './not-found/not-found.component';
import {FavouriteJokesComponent} from './favourite-jokes/favourite-jokes.component';
import {StoreModule} from './store/store.module';
import {SingleJokeComponent} from './single-joke/single-joke.component';
import {LoadingspinnerComponent} from './loadingspinner/loadingspinner.component';
import {SortPipe} from './sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    JokesComponent,
    NotFoundComponent,
    FavouriteJokesComponent,
    SingleJokeComponent,
    LoadingspinnerComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgReduxModule,
    NgReduxRouterModule,
    MatProgressSpinnerModule,
    StoreModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
