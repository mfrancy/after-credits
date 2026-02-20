import { Component, EventEmitter, Input } from '@angular/core';
import { Banner } from './banner/banner';
import { WinnerSearch } from './winner-search/winner-search';
import { WinnerResult } from "./winner-result/winner-result";

@Component({
  selector: 'app-home-component',
  imports: [Banner, WinnerSearch, WinnerResult],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

@Input() searchSubmitted = new EventEmitter<string>()

handleSearchWinner: string = ''

  handleSearch(event: string) {
    this.handleSearchWinner = event
    console.log(this.handleSearchWinner)
  }




}
