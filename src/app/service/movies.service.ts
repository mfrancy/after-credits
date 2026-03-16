import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiMovie, ApiMovieResponse } from '../models/movie.model';
import { api_routes } from '../../core/config/api.config';
import { environment } from '../../environments/environments';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private http = inject(HttpClient);

  private mapToMovie(apiMovie: ApiMovie) {
    return {
      id: apiMovie.id,
      title: apiMovie.title,
      posterUrl: `https://image.tmdb.org/t/p/w500${apiMovie.poster_path}`,
      releaseDate: apiMovie.release_date,
      rating: apiMovie.vote_average,
    };
  }


  private fetchMovies(url: string) {
    return this.http.get<ApiMovieResponse<ApiMovie>>(url).pipe(
      map(response => response.results.map(movie => this.mapToMovie(movie)))
    )
  }

  getPopular() {
    return this.fetchMovies(api_routes.getMoviePopular());
  }

  getUpcoming() {
    return this.fetchMovies(api_routes.getUpcomingMovie())
      
  }

  getByDate(date: string) {
    return this.fetchMovies(api_routes.getByDate(date))
  }
}
