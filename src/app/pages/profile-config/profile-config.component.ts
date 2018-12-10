import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-config',
  templateUrl: './profile-config.component.html',
  styleUrls: ['./profile-config.component.scss']
})
export class ProfileConfigComponent implements OnInit {

  userLogged: User;
  userInfo: User;
  checkboxGitHub: boolean = false; 
  checkBoxFiles: boolean = false;
  user;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.user = {};
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
    if (field == 'gitHub') {
      this.checkboxGitHub = value;
    } else {
      this.checkBoxFiles = value;
    }
  }

  saveChanges(name, email, picture, gHubLogin, gHubPasswd) {
    this.user.admin = this.userLogged.admin;
    this.user.name = name;
    this.user.email = email;
    if (picture !== '') this.user.picture = picture;
    this.user.permissions = {};
    this.user.permissions.gitHubIntegration = {};
    this.user.permissions.gDriveIntegration = {};
    this.user.permissions.gitHubIntegration.value = this.checkboxGitHub;
    this.user.permissions.gitHubIntegration.login = gHubLogin;
    this.user.permissions.gitHubIntegration.password = gHubPasswd;
    this.user.permissions.gDriveIntegration.value = this.checkBoxFiles;

    this.profileService.updateProfile(this.userLogged.username, this.user)
  }

}
