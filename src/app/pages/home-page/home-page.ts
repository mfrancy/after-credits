import { Component, EventEmitter, Input } from '@angular/core';
import { Banner } from "../../components/banner/banner";
import { WinnerSearch } from "../../components/winner-search/winner-search";
import { WinnerResult } from "../../components/winner-result/winner-result";

@Component({
  selector: 'app-home-page',
  imports: [Banner, WinnerSearch, WinnerResult],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
@Input() searchSubmitted = new EventEmitter<string>()

handleSearchWinner: string = ''

  handleSearch(event: string) {
    this.handleSearchWinner = event
    console.log(this.handleSearchWinner)
  }




}
