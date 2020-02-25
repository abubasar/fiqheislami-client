import { Component, OnInit } from '@angular/core';
import { BaseRequestModel } from 'src/app/entities/base-request-model';
import { FatawaAnswerService } from 'src/app/services/fatawa-answer.service';

@Component({
  selector: 'app-list-fatawa',
  templateUrl: './list-fatawa.component.html',
  styleUrls: ['./list-fatawa.component.scss']
})
export class ListFatawaComponent implements OnInit {

  constructor(private service:FatawaAnswerService) {
    this.searchRequest=new BaseRequestModel();
    this.searchRequest.page=1
    this.searchRequest.orderBy="createdBy"
    this.searchRequest.isAscending=false;
   }

  ngOnInit() {
    this.search();
    this.searchForPaging();
  }

  models:any[]
  searchRequest:BaseRequestModel
  totalCount:number=0
  
  searchForPaging(){
    var r=new BaseRequestModel();
    r.page=-1;
    r.orderBy="createdBy";
    this.service.searchFatawaAnswer(r).subscribe(res=>{
    
  for(var i = 0; i < res.length; ++i){
      
        this.totalCount++;
  }
      
      this.searchRequest.totalPage = Math.ceil(this.totalCount / 10);
     
    
    },error=>{
      console.log(error)
    })
  
  }
  
  
  search(){
    this.service.searchFatawaAnswer(this.searchRequest).subscribe(res=>{
      
      this.models=res;
    
      if (this.models.length === 0) {
        console.log('No search result found');
        alert('No search result found');
      }
      console.log(this.models);
    },error=>{
      console.log(error)
    })
  
  }
  
  sort(property:string){
    this.searchRequest.orderBy=property;
    this.searchRequest.isAscending=!this.searchRequest.isAscending  
    this.search();
  }
  
  previous(){
  if(this.searchRequest.page>1){
  this.searchRequest.page=this.searchRequest.page-1; 
  this.search();
  }
  }
  
  next(){
    if(this.searchRequest.totalPage-this.searchRequest.page>0){
      this.searchRequest.page=this.searchRequest.page+1;
    }
    this.search();
  
  }
  
 

}
