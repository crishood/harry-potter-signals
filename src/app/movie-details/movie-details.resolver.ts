import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { MovieDetails } from '../model/movie.model';

export const movieDetailsResolver: ResolveFn<MovieDetails> = (route) => {
  const movieService = inject(MoviesService);
  const movieId = route.paramMap.get('id') ?? '';
  return movieService.getMovieDetails(movieId);
};
