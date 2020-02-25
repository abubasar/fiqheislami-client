import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { Entity } from 'src/app/entities/entity';
import { BaseRequestModel } from 'src/app/entities/base-request-model';

export abstract class BaseComponent<T extends Entity>{
  model:T
  
constructor(public service:BaseService<T>){
this.model=this.createInstance(Entity) as T;
this.searchRequest=new BaseRequestModel();
this.searchRequest.page=1
this.searchRequest.orderBy="createdBy"
this.searchRequest.isAscending=false;
}

save(){
  this.service.save(this.model).subscribe(res=>{
    this.reset();
    console.log('success');
  },error=>{
    console.log(error)
  });
}

abstract reset();

createInstance<Entity>(c:new()=>Entity):Entity{
  return new c();
}
 
 edit(){
  this.service.edit(this.model).subscribe(res=>{
    this.reset();
    console.log('success');
  },error=>{
    console.log(error)
  });
}

delete(id:number){
  var result=confirm("Are You sure to delete this");
  if(result){
    this.service.delete(id).subscribe(res=>{
      this.search();
    },error=>{
      console.log(error);
    })
  }
    }




models:T[]
searchRequest:BaseRequestModel
totalCount:number=0

searchForPaging(){
  var r=new BaseRequestModel();
  r.page=-1;
  r.orderBy="createdBy";
  this.service.search(r).subscribe(res=>{
  
for(var i = 0; i < res.length; ++i){
    
      this.totalCount++;
}
    
    this.searchRequest.totalPage = Math.ceil(this.totalCount / 10);
   
  
  },error=>{
    console.log(error)
  })

}


search(){
  this.service.search(this.searchRequest).subscribe(res=>{
    
    this.models=res;
  
    if (this.models.length === 0) {
      console.log('No search result found');
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
    this.search();
  }
  

}

goto(page: number): void {
  this.searchRequest.page = page;
  this.search();
}
}