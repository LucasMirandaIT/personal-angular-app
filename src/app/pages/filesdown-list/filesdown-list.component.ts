import { Component, OnInit } from '@angular/core';
import { FilesDownloadService } from 'src/app/services/files-download.service';
import { User } from 'src/app/models/user';
import { MatDialog } from '@angular/material/dialog';
import { AddFileModal } from 'src/app/modals/add-file-modal/add-file-modal.component';

@Component({
  selector: 'app-filesdown-list',
  templateUrl: './filesdown-list.component.html',
  styleUrls: ['./filesdown-list.component.scss']
})
export class FilesdownListComponent implements OnInit {

  constructor(private filesService : FilesDownloadService, public dialog: MatDialog) { }

  filesList;
  newFileData;
  loading: boolean;
  noData: boolean;
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
      console.log('Files List: ', this.filesList);
    }).catch((err) => {
      this.loading = false;
      this.noData = true;
    })
  }

  openAddFileModal() {
    const dialogRef = this.dialog.open(AddFileModal, {
      width: '60%'
    })
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Modal Result', result);
      this.addNewFile(result);
    });
  }

  addNewFile(newFile) {
    this.filesService.addFile(newFile).toPromise().then((retorno)=> {
      this.refreshList();
    })
  }

}
