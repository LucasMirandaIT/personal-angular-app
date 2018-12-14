import { Component, OnInit } from '@angular/core';
import { RepoListService } from 'src/app/services/repo-list/repo-list.service';
import { SearchService } from 'src/app/services/search.service';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MatTooltip } from '@angular/material';

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

  constructor(private repoService: RepoListService, private searchService: SearchService, private clipboard: ClipboardService, private toastr: ToastrService) { }

  ngOnInit() {
    this.userLogged = JSON.parse(sessionStorage.getItem('userLogged'));    
    this.initSearch();
    this.refreshRepos();
  }

  initSearch() {
    this.searchService.getSearchValue.subscribe(retorno => {
      this.searchValue = retorno;
    });
  }

  refreshRepos() {
    let auth;
    for (let i = 0; i < this.userLogged[0].permissions.length; i++) {
      if(this.userLogged[0].permissions[i].gitHubIntegration) {
        auth = btoa(this.userLogged[0].permissions[i].gitHubIntegration.login + ':' + this.userLogged[0].permissions[i].gitHubIntegration.password);
      }
    }
    this.repoService.getRepos(auth).toPromise().then((response: any) => {
      this.repositories = JSON.parse(response._body);
      console.log(this.repositories);
    });
  }
  tableClick(url) {
    console.log('Clicked');
    window.open(url);
  }

  copyLink(link) {
    this.clipboard.copyFromContent(link);
    this.toastr.info('URL Copiada com Sucesso!', 'URL de Clone!', {
      progressBar: false,
      closeButton: false,
      timeOut: 1000
    });
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
