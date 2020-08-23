import { Component } from '@angular/core';

import { User } from '../../common/_models';
import { AccountService } from '../../common/_services';
import { VideoInfoService } from '@app/common/_services/video-info.service';
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
