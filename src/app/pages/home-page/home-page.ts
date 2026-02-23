import { Component, EventEmitter, inject, Input, OnInit } from '@angular/core';
import { Banner } from '../../components/banner/banner';
import { WinnerSearch } from '../../components/winner-search/winner-search';
import { WinnerResult } from '../../components/winner-result/winner-result';
import { MoviesService } from '../../service/movies.service';
import { Movie } from '../../models/movie.model';
import { MovieSection } from '../../components/movie-section/movie-section';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Banner, MovieSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  @Input() searchSubmitted = new EventEmitter<string>();

  private moviesService = inject(MoviesService);

  movies: Movie[] = [];

  // ngOnInit(): void {
  //   console.log('HOME INIT');
  //   this.moviesService.getPopular().subscribe((movies) => {
  //     console.log('FILMES RECEBIDOS:', movies.length);
  //     setTimeout(() => {
  //       this.movies = movies;
  //     }, 0);
  //   });

  ngOnInit(): void {
  console.log('HOME INIT');
  
  this.moviesService.getPopular().subscribe(movies => {
    console.log('ANTES DE ATRIBUIR:', this.movies.length);
    this.movies = movies;
    console.log('DEPOIS DE ATRIBUIR:', this.movies.length);
  });
  }
}
