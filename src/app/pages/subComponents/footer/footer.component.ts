import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../common/modelsAndServices/_services/accountService/account.service';
import { User } from '../../../common/modelsAndServices/_models/user';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
  }
}
