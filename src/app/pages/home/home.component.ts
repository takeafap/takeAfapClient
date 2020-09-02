import { Component } from '@angular/core';

import { User } from '../../common/modelsAndServices/_models/user';
import { AccountService } from '../../common/modelsAndServices/_services/accountService/account.service';
import { VideoInfoService } from '../../common/modelsAndServices/_services/videoService/video-info.service';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  videoPlaylist;
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

  constructor(private accountService: AccountService, private _videoService:VideoInfoService,private _http:HttpClient) {
    this.user = this.accountService.userValue;
  }
  loadVideoList(){
    this._videoService.getVideoData().subscribe((resultFromApi: any[]) => {
      this.videoPlaylist = resultFromApi;
    })

  }
}
