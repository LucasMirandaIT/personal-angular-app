import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Headers, Http } from '@angular/http';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RepoListService {

  userCredentials;

  constructor(public http: Http, public authService: AuthService) { }

  gitHubAuth(username, password) {
    let headers: Headers = new Headers();
    let userAuth = `${username}:${password}`;
    this.userCredentials = btoa(userAuth);
    headers.append("Authorization", "Basic " + this.userCredentials);
    return this.http.get(environment.URL_GITHUB_AUTH, {headers: headers});
  }

  getRepos() {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + this.userCredentials);
    return this.http.get(environment.URL_GITHUB_REPO, { headers: headers });
  }
}
