import { Component, inject, OnInit } from '@angular/core';
import { MovieDetails } from "../../components/movie-details/movie-details";
import { MovieDetailsService } from '../../service/movie-details.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-movie-page',
  imports: [MovieDetails, AsyncPipe],
  templateUrl: './movie-page.html',
  styleUrl: './movie-page.css',
})
export class MoviePage {
  private movieDetailsService = inject(MovieDetailsService)
  route = inject(ActivatedRoute)

  idMovie: string | null = ''

  movieDetails$ =  this.route.paramMap.pipe(
    switchMap(params => {
      const id = params.get('id');
      return this.movieDetailsService.getMovieById(id!)
    })
  )



}
