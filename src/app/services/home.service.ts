import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: Http) { }

  getNews() {
    return this.http.get(environment.URL_GNEWS);
  }
}
