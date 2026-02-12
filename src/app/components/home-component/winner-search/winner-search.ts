import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-winner-search',
  standalone: true,
  imports: [InputTextModule, FormsModule, ButtonModule],
  templateUrl: './winner-search.html',
  styleUrl: './winner-search.css',
})
export class WinnerSearch {

  @Output() searchSubmitted  = new EventEmitter<string>()
  

  searchWinner: string = '';
  confirmedQuery: string = '';
  


onSearchWinner() { 
   this.confirmedQuery = this.searchWinner
  this.searchSubmitted.emit(this.searchWinner)
}

}
