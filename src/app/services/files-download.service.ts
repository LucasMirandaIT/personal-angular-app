import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FilesDownloadService {

  constructor(private http: Http) { }

  loadFilesList() {
    let backEndRoute = environment.URL_BACKEND_PROD + 'driveFiles/listAll';
    return this.http.get(backEndRoute);
  }

  addFile(file) {
    let backEndRoute = environment.URL_BACKEND_PROD + 'driveFiles/insert';
    return this.http.post(backEndRoute, file);
  }
}
