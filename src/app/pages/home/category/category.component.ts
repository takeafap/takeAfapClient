import { Component, OnInit } from '@angular/core';
import { IVideo } from '../../../common/_models/iVideo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VideotestService } from '../../../common/_services/videotest.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  private model: IVideo;

  constructor(private _data: VideotestService) {
    this._data.rezeptModel.subscribe(result => {
      if(result != null) {
        this.model = result;
      }
    })
   }

   ngOnInit(): void {
    this._data.loadData();
  }

  public test(){
    if(this.model.tag == "oma")
    {
      console.log("AAAAAHSDU)IDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")
    }
  }

}
