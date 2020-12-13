import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,of, from, BehaviorSubject } from 'rxjs';
import { environment } from '@environments/environment';
import { IVideo } from '../../_models/iVideo';

@Injectable({
  providedIn: 'root'
})
export class VideoInfoService {


  private serviceUrl = environment.api2Url;


  constructor(private http:HttpClient) {
    this.updateEmployee;
  }

  getVideoData(){
    return this.http.get(this.serviceUrl);
  }
  updateEmployee(id: number) {
    return this.http.put(`https://nodejsvideocrud.herokuapp.com/tasks`, id);
  }
}
