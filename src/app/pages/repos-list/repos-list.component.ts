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
    this.userLogged = JSON.parse(sessionStorage.getItem('userLogged'));    
    this.refreshRepos();
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
}
