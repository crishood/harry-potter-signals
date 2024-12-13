import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { movieDetailsResolver } from './movie-details/movie-details.resolver';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./movie-details/movie-details.component').then(
        (m) => m.MovieDetailsComponent
      ),
    resolve: { movie: movieDetailsResolver },
  },
];
