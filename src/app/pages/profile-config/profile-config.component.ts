import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastrService } from 'ngx-toastr';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-profile-config',
  templateUrl: './profile-config.component.html',
  styleUrls: ['./profile-config.component.scss']
})
export class ProfileConfigComponent implements OnInit {

  userLogged: User = new User();
  user: User = new User();
  userInfo: User = new User();
  checkboxGitHub: boolean = false;
  checkBoxFiles: boolean = false;

  selectedIndex;

  imageChangedEvent: any = '';
  croppedImage: any = '';
  cropperReady = false;


  gitHubLogin;
  gitHubPassword;

  constructor(private profileService: ProfileService, private toastr: ToastrService) { }

  ngOnInit() {
    this.refreshInfo();
  }

  nextStep() {
    this.selectedIndex ++;
    console.log(this.selectedIndex);
  }

  refreshInfo() {
    let user = JSON.parse(sessionStorage.getItem('userLogged'));
    this.userLogged = user[0];
    if (!this.userLogged.picture) {
      this.userLogged.picture = './assets/img/avatar.png';
    }
    for (let i = 0; i < this.userLogged.permissions.length; i++) {
      if (this.userLogged.permissions[i].gitHubIntegration.login) {
        this.checkboxGitHub = this.userLogged.permissions[i].gitHubIntegration.value;
        this.gitHubLogin = this.userLogged.permissions[i].gitHubIntegration.login;
        this.gitHubPassword = this.userLogged.permissions[i].gitHubIntegration.password;
      }
    }
    this.userAttributes();
  }

  userAttributes() {
    this.userInfo = this.userLogged;
  }

  viewPassword(fieldID) {

  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    document.getElementById('picture_select').style.display = 'none';
    // document.getElementById('picture_select').classList.add('active');
  }

  imageCropped(event: ImageCroppedEvent) {
    this.userInfo.picture = event.base64;
  }
  imageLoaded() {
    this.cropperReady = true;
  }
  loadImageFailed() {
    // show message
    console.log('Load Image Failed Function');
  }

  openModal() {
    // Get the modal
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
  }

  changedCheckbox(field, value) {
    if (field == 'gitHub') {
      this.checkboxGitHub = value;
    } else {
      this.checkBoxFiles = value;
    }
  }

  saveChanges() {
    console.log('UserINFO: ', this.userInfo);
    for (let i = 0; i < this.userLogged.permissions.length; i++) {
      this.userInfo.permissions[i].gitHubIntegration.value = this.checkboxGitHub;
      this.userInfo.permissions[i].gitHubIntegration.login = this.gitHubLogin;
      this.userInfo.permissions[i].gitHubIntegration.password = this.gitHubPassword;
    }

    this.profileService.updateProfile(this.userInfo).toPromise().then((retorno) => {
      this.toastr.success('Informações Alteradas com Sucesso!', 'Sucesso!');
      console.log('Retorno Serviço Update: ', retorno);
    }).catch((err) => {
      if (err.status === 413) {
        this.toastr.error('Imagem escolhida muito grande, favor redimensionar ou escolher uma nova imagem', 'Erro no Upload');
      }
      console.log('Error Serviço Update: ', err);
    })
  }

}
