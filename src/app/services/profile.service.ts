import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: Http) { }



  updateProfile(userLogged, newUser) {

    let bodyRequest = {
      username: userLogged,
      newUser: {
        admin: newUser.admin,
        name: newUser.name,
        email: newUser.email,
        picture: newUser.picture,
        permissions: {
          gitHubIntegration: {
            value: newUser.permissions.gitHubIntegration.value,
            login: newUser.permissions.gitHubIntegration.login,
            password: newUser.permissions.gitHubIntegration.password
          },
          gDriveIntegration: {
            value: newUser.permissions.gDriveIntegration.value
          }
        }
      }
    }

    let backendUrl = environment.URL_BACKEND_PROD + 'users/updateUser/'
    this.http.post(backendUrl, bodyRequest)
  }
}
