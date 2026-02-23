import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieCard } from "../movie-card/movie-card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-section',
  standalone: true,
  imports: [MovieCard, CommonModule],
  templateUrl: './movie-section.html',
  styleUrl: './movie-section.css',
})
export class MovieSection implements OnChanges {
  @Input() movies: Movie[] = []

  ngOnChanges(changes: SimpleChanges) {
    console.log('Mudou:', changes['movies']?.currentValue?.length);
  }

  trackById(index: number, movie: Movie) {
  return movie.id;
}
}
