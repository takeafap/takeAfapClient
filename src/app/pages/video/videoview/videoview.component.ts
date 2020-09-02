import { Component, OnInit } from '@angular/core';
import { VideoInfoService } from '../../../common/modelsAndServices/_services/videoService/video-info.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-videoview',
  templateUrl: './videoview.component.html',
  styleUrls: ['./videoview.component.scss'],
})
export class VideoviewComponent implements OnInit {
  videoObj: any;
  videoPlaylist;

  constructor(private _videoService: VideoInfoService) {
    this.videoObj = JSON.parse(sessionStorage.getItem('video'));
    this.videoPlaylist = JSON.parse(sessionStorage.getItem('videoPlaylist'));
    console.log('videoObj', this.videoObj);
  }

  ngOnInit() {
    this._videoService.getVideoData().subscribe((resultFromApi: any[]) => {
      this.videoPlaylist = resultFromApi;
    });
  }
  like() {
    console.log('LIKE');
  }
  dislike() {
    console.log('DISLIKE');
  }
}
