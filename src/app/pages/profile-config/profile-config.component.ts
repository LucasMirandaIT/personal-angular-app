import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-config',
  templateUrl: './profile-config.component.html',
  styleUrls: ['./profile-config.component.scss']
})
export class ProfileConfigComponent implements OnInit {

  userLogged: User;
  userInfo: User;

  constructor() { }

  ngOnInit() {
    this.refreshInfo();
  }

  refreshInfo() {
    let user = JSON.parse(sessionStorage.getItem('userLogged'));
    this.userLogged = user[0];
    if (!this.userLogged.picture) {
      this.userLogged.picture = './assets/img/avatar.png';
    }
    this.userAttributes();
  }

  userAttributes() {
    this.userInfo = this.userLogged;
  }

  changedCheckbox(field, value) {
    console.log('Changed Checkbox', field, ' - ', value);
  }

}
