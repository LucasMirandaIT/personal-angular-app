import { Component, OnInit } from '@angular/core';
import { RepoListService } from 'src/app/services/repo-list/repo-list.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {

  repositories;
  userLogged;
  loading = true;

  searchValue;

  constructor(private repoService: RepoListService, private searchService: SearchService) { }

  ngOnInit() {
    this.userLogged = JSON.parse(sessionStorage.getItem('gitHubLoginInfo'));    
    this.initSearch();
  }

  initSearch() {
    this.searchService.getSearchValue.subscribe(retorno => {
      this.searchValue = retorno;
    });
  }

  refreshRepos() {
    this.repoService.getRepos().toPromise().then((response: any) => {
      this.loading = false;
      this.repositories = JSON.parse(response._body);
      console.log(this.repositories);
    });
  }
  tableClick(url) {
    console.log('Clicked');
    window.open(url);
  }

  gitHubLogin(username, password) {
    this.repoService.gitHubAuth(username, password).toPromise().then((retorno: any) => {
      let logininfo = retorno._body;
      sessionStorage.setItem('gitHubLoginInfo', logininfo);
      this.refreshRepos();
    }).catch((err) => {
      let aux = JSON.parse(err._body);
      let erro = aux.message;
    });
  }
}
