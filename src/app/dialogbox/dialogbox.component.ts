import { Optional } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FavouriteChallenge } from '../services/favouriteChallenge.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {
  fromPage: Array<any> = [];

  constructor(public dialogRef: MatDialogRef<DialogboxComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public favouriteChallenge: FavouriteChallenge) {
                this.fromPage.push(data.fromParent);
              }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  toggleSelected(selected) {
      // this.selected = !this.selected;
      // tslint:disable-next-line:no-string-literal
      this.fromPage[0].selected = !this.fromPage[0].selected;
      this.favouriteChallenge.selectedFavouriteChallenge = [...this.fromPage];
  }

  // tslint:disable-next-line:typedef
  closeDialog(challenge) {
    this.dialogRef.close({ event: 'close', data: challenge });
  }
}
