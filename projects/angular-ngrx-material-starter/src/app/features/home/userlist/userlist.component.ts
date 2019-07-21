import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {DataService} from '../../../core/data/data.service';
import { User } from './userlist.data';
import {Observable} from 'rxjs';

@Component({
  selector: 'anms-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserlistComponent implements OnInit {

  userList$: Observable<any>;

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.userList$ = this.data.getUserProfiles();
  }

  clickedUser(user) {
    console.warn('clickedUser', user);
  }

}
