import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchValue = new BehaviorSubject<string>('');
  getSearchValue = this.searchValue.asObservable();

  constructor() { }

  setSearchValue(value) {
    this.searchValue.next(value);
  }
}
