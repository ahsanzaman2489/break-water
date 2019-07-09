import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {JokesComponent} from './jokes/jokes.component';


const routes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'jokes/:category', component: JokesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
