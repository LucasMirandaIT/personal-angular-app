import { Component, OnInit } from '@angular/core';
import { FilesDownloadService } from 'src/app/services/files-download.service';
import { User } from 'src/app/models/user';
import { MatDialog } from '@angular/material/dialog';
import { AddFileModal } from 'src/app/modals/add-file-modal/add-file-modal.component';
import { Router } from '@angular/router';
import { ifError } from 'assert';

@Component({
  selector: 'app-filesdown-list',
  templateUrl: './filesdown-list.component.html',
  styleUrls: ['./filesdown-list.component.scss']
})
export class FilesdownListComponent implements OnInit {

  constructor(private filesService : FilesDownloadService, public dialog: MatDialog, public router: Router) { }

  filesList;
  newFileData;
  loading: boolean;
  userLogged: User;

  ngOnInit() {
    this.refreshList();
    this.userLogged = JSON.parse(sessionStorage.getItem('userLogged'));
    this.userLogged = this.userLogged[0];
  }

  refreshList() {
    this.loading = true;
    this.filesService.loadFilesList().toPromise().then((retorno: any) => {
      this.loading = false;
      this.filesList = JSON.parse(retorno._body);
    }).catch((err) => {
      this.loading = false;
    })
  }

  openAddFileModal() {
    const dialogRef = this.dialog.open(AddFileModal, {
      width: '60%'
    })
    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.addNewFile(result);
      }
    });
  }

  tableClick(url) {
    window.open(url, '_blank');
  }

  addNewFile(newFile) {
    this.filesService.addFile(newFile).toPromise().then((retorno)=> {
      this.refreshList();
    })
  }

}
