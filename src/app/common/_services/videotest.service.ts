import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { IVideo } from '../_models/iVideo';

@Injectable({
  providedIn: 'root'
})
export class VideotestService {
  private sModel: BehaviorSubject<IVideo>;
  private serviceUrl = environment.api2Url;

  constructor(
    private http:HttpClient
    ) {
      this.sModel = new BehaviorSubject<IVideo>(null);
     }

     get rezeptModel(): Observable<IVideo> {
       return this.sModel.asObservable();
     }

     private getData():Observable<IVideo> {
       return this.http.get<IVideo>(this.serviceUrl)
     }

     public loadData() {
      var result: IVideo;
      this.getData().subscribe(res =>
        result = res,
        (err) => { console.error(err); this.sModel.next(null) },
        () => {
          this.sModel.next(result);
        })
  
    }
  }