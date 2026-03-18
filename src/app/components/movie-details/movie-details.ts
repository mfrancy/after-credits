import { Component, Input } from '@angular/core';
import { MovieDetail } from '../../models/movie-details.model';
import { ButtonModule } from "primeng/button";
import { DatePipe } from '@angular/common'; 

@Component({
  selector: 'app-movie-details',
  imports: [ButtonModule, DatePipe],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails {
  @Input() movie?: MovieDetail | null = null

}
