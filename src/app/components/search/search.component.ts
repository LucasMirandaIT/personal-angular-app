import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  searchValue;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search() {
    this.searchService.setSearchValue(this.searchValue);
  }

}
