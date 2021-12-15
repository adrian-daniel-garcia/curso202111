import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HooksComponent } from './components/hooks/hooks.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MyAccountComponent } from './components/my-account/my-account.component';

const routes: Routes = [
  {
    path: 'peliculas/:id',
    component: MovieDetailComponent
  },
  {
    path: 'peliculas',
    component: MoviesComponent
  },
  {
    path: 'mi-cuenta',
    component: MyAccountComponent
  },
  {
    path: 'hooks',
    component: HooksComponent
  },
  {
    path: '' ,
    redirectTo: 'peliculas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
