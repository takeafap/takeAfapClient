import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,of, from, BehaviorSubject } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoInfoService {


  private serviceUrl = environment.api2Url;


  constructor(private http:HttpClient) { }

  getVideoData(){
    return this.http.get(this.serviceUrl)
  }

}
