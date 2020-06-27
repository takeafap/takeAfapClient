import { Component } from '@angular/core';

import { User } from '../../common/_models';
import { AccountService } from '../../common/_services';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  hi = ['Hallo', 'Servus', 'Moin', 'Hi'];
  randomHi = this.hi[Math.floor(Math.random() * this.hi.length)];

  sprueche = [
    'Flöte polieren',
    'Lanze verbiegen',
    'Kinder versprühen',
    'wixxen',
    'Eier jonglieren',
    'fappen',
    'Lümmel auskneten',
    'schleudern',
    'Kolben ölen',
    'Rohr freipumpen',
    'Vorhautjogging',
    'Mayonnaise verschießen',
    'Flötensolo',
    'Flinte polieren',
    'Pfeife ausklopfen',
    'keulen',
    'wienern',
    'Jürgen würgen',
  ];
  randomSpruch = this.sprueche[
    Math.floor(Math.random() * this.sprueche.length)
  ];

  user: User;

  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
  }
}
