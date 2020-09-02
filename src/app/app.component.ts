import { Component } from '@angular/core';

import { AccountService } from '../app/common/modelsAndServices/_services/accountService/account.service';
import { User } from '../app/common/modelsAndServices/_models/user';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
  }
}
