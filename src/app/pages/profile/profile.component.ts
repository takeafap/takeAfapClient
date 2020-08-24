import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/common/_services';
import { Time } from '@angular/common';
import { User } from '@app/common/_models';
import { first } from 'rxjs/operators';
import { VideoInfoService } from '@app/common/_services/video-info.service';
interface Article {
  id: number;
  title: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  
  currentTime: number;
  tag: Time;

  private url = 'https://nodejsvideocrud.herokuapp.com/tasks'; 

  constructor(private accService:AccountService, private videoService:VideoInfoService) {

  }
  
  ngOnInit(): void {}

  setCurrentTime(data) {
     this.currentTime = data.target.currentTime;
     console.log(this.currentTime)  

  }

  


}

  

