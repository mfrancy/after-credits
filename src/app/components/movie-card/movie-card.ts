import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-movie-card',
  imports: [CardModule, TooltipModule ],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
@Input() movie!: Movie;
}
