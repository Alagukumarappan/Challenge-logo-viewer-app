import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ChallengesService } from '../services/challenges.service';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { FavouriteChallenge } from '../services/favouriteChallenge.service';

@Component({
  selector: 'app-logo-viewer',
  templateUrl: './logo-viewer.component.html',
  styleUrls: ['./logo-viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogoViewerComponent implements OnInit {

  challenges: Array<any> = [];
  dialogResult: any;
  fromFavChallege: Array<any> = [];
  groupName = ['S.No', 'Challenge List', 'Favourite'];

  constructor(private challengesService: ChallengesService, private dialog: MatDialog,
              public favouriteChallenge: FavouriteChallenge) {
                this.getChallenges();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getChallenges() {
    this.challengesService.getChallenges().subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.challenges = data['allChallenges']['edges'];
      this.challenges = this.challenges.map((challenge, i) => ( {...challenge, id: i, selected: false} ));
    });
  }
  // tslint:disable-next-line:typedef
  openDialog(challenge) {
    const dialogConfig = this.dialog.open(DialogboxComponent, {
      height: 'auto',
      width: 'auto',
      backdropClass: 'headerDialogBox',
      data: {fromParent: challenge}
    });

    dialogConfig.afterClosed().subscribe(result => {
      // console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
      this.fromFavChallege = [...this.favouriteChallenge.selectedFavouriteChallenge];
      this.challenges.find(x => {
        this.fromFavChallege.forEach(element => {
          if (x.id === element.id) {
            x.selected = element.selected;
          }
        });
      });
    });
  }


}
