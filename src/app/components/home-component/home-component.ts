import { Component } from '@angular/core';
import { Banner } from './banner/banner';
import { WinnerSearch } from './winner-search/winner-search';

@Component({
  selector: 'app-home-component',
  imports: [Banner, WinnerSearch],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

handleSearchWinner: string = ''

  handleSearch(event: string) {
    this.handleSearchWinner = event
    console.log(this.handleSearchWinner)
  }


}
