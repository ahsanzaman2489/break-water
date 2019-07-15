import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {JokesComponent} from './jokes/jokes.component';
import {FavouriteJokesComponent} from './favourite-jokes/favourite-jokes.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: "categories",
    pathMatch: "full"
  },
  {path: 'categories', component: CategoriesComponent},
  {path: 'jokes/:category', component: JokesComponent},
  {path: 'favourites', component: FavouriteJokesComponent},
  {path: '**', redirectTo: '/404'},
  {path: '404', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
