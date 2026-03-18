import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { api_routes } from '../../core/config/api.config';
import { MovieDetails } from '../components/movie-details/movie-details';
import { MovieDetail } from '../models/movie-details.model';
import { map } from 'rxjs';
import { imageUrl } from './shared/image.utils';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  private http = inject(HttpClient);

  


  getMovieById(id: string) {
    return this.http.get<MovieDetail>(api_routes.getMovieById(id)).pipe(map(movie => ({
      ...movie,
      posterUrl: imageUrl(movie.backdrop_path, 'original')
    })))
  }



}
