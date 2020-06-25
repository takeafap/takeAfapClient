import { Component } from '@angular/core';

import { User } from '../../common/_models';
import { AccountService } from '../../common/_services';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user: User;

  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
  }
}
