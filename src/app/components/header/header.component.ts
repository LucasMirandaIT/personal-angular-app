import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pan-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userLogged: User;
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.refreshInfo();
  }

  refreshInfo() {
    this.userLogged = JSON.parse(sessionStorage.getItem('userLogged'));
    if (!this.userLogged[0].picture) {
      this.userLogged[0].picture = './assets/img/avatar.png';
    }
    console.log('userLogged', this.userLogged);
  }

  expandMenu() {
    console.log('Entered Mouse');
    var myClass = document.getElementsByClassName('page');
    myClass[0].classList.add('navExpanded');
  }
  
  collapseMenu() {
    console.log('Leave Mouse');
    var myClass = document.getElementsByClassName('page');
    myClass[0].classList.remove('navExpanded');
    let elem = document.getElementById("logout-info");
    elem.classList.remove("active");
    let arrow = document.getElementById("marker");
    arrow.classList.remove("active");
  }

  logoutInfo() {
    let elem = document.getElementById("logout-info");
    let arrow = document.getElementById("marker");
    elem.classList.toggle("active");
    arrow.classList.toggle("active");
  }

  profileEdit() {
    this.collapseMenu();
    this.router.navigate(['user-config']);
    console.log('Profile Clicked');
  }

  logout() {
    this.auth.logout();
  }
}
