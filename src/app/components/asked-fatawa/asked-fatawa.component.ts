import { FatawaService } from './../../services/fatawa.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-asked-fatawa',
  templateUrl: './asked-fatawa.component.html',
  styleUrls: ['./asked-fatawa.component.scss']
})
export class AskedFatawaComponent extends BaseComponent<any> implements OnInit {
  reset() {
    throw new Error("Method not implemented.");
  }

  constructor(public service:FatawaService,private activatedRoute:ActivatedRoute,private http:HttpClient) {
    super(service);
   }

  ngOnInit() {
  
    this.search();
    this.searchForPaging();
  }

  isComplete(id:string){
      this.http.get(environment.baseApiUrl+'fatawa/get/'+id).subscribe(res=>{
        console.log(res)
     this.model=res;
     this.model.isAnswered=true;
     this.service.edit(this.model).subscribe(res=>{
       console.log(res);
       this.search();
     })
      })
     }
  }





