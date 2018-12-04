import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DATE_LOCALE, MAT_NATIVE_DATE_FORMATS, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-file-modal',
  templateUrl: './add-file-modal.component.html',
  styleUrls: ['./add-file-modal.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ]
})
export class AddFileModal implements OnInit {

  insertDate;
  data;
  newFile;
  downloadUrl;

  filename;

  constructor(public dialogRef: MatDialogRef<AddFileModal>) { }

  ngOnInit() {
  }

  closeDialog() {
    this.newFile = {
      filename: this.filename,
      date: this.insertDate,
      url: this.downloadUrl
    }
    this.dialogRef.close(this.newFile);
  }
}
