import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: Http) { }



  updateProfile(newUser) {

    let bodyRequest = {
      id: newUser._id,
      newUser: {
        admin: newUser.admin,
        name: newUser.name,
        email: newUser.email,
        picture: newUser.picture,
        permissions: {
          gitHubIntegration: {
            value: newUser.permissions[0].gitHubIntegration.value,
            login: newUser.permissions[0].gitHubIntegration.login,
            password: newUser.permissions[0].gitHubIntegration.password
          }
        }
      }
    }
;
    let backendUrl = environment.URL_BACKEND_PROD + 'users/updateUser/';
    return this.http.post(backendUrl, bodyRequest);
  }

  register(user) {
    let backendUrl = environment.URL_BACKEND_PROD + 'aprooveUser/createUser';
    return this.http.post(backendUrl, user);
  }

  getUsers(){
    let backendUrl = environment.URL_BACKEND_PROD + 'users/getUsers';
    return this.http.get(backendUrl);
  }

  getUsersToAproove() {
    let backendUrl = environment.URL_BACKEND_PROD + 'users/getAproove';
    return this.http.get(backendUrl);
  }

  aprooveDeleteById(id) {
    let backendUrl = environment.URL_BACKEND_PROD + 'aprooveUser/deleteAproove';
    return this.http.post(backendUrl, {id: id});
  }

  aprooveCreateUser(user) {
    let backendUrl = environment.URL_BACKEND_PROD + 'users/createUser';
    return this.http.post(backendUrl, user);
  }
}
