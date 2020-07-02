import { Component, OnInit } from '@angular/core';
import { VideoInfoService} from '../../../common/_services/video-info.service';
import { IVideo } from '../../../common/_models/iVideo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {

  videoPlaylist: any = [];

  constructor(private _videoService: VideoInfoService, private _http:HttpClient, private router:Router) { }

  ngOnInit(){
    this.loadVideoList()
  }
  
  loadVideoList(){
    this._videoService.getVideoData().subscribe((resultFromApi: any[]) => {
      this.videoPlaylist = resultFromApi;
      sessionStorage.setItem('videoPlaylist', JSON.stringify(this.videoPlaylist));
    })
    
  }
  gotoSingleVideo = (video) => {
      sessionStorage.setItem('video', JSON.stringify(video));
      this.router.navigate(['/videoview'])
  }

}
