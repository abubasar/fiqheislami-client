import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from '../entities/entity';
import { BaseRequestModel } from '../entities/base-request-model';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
commandUrl:string

  constructor(public http:HttpClient,public url:string) {
    this.commandUrl=url
   }

   save(data:Entity):Observable<any>
   {
    data.createdBy="me"
    return  this.http.post(this.commandUrl+'/add',data);
   }
  get(id:number):Observable<T>
  {
    return this.http.get<T>(this.commandUrl+'/get/'+id);   
  }

  generateReferenceId():Observable<any>
   {
    return this.http.get<any>(this.commandUrl+'/reference-no');
   }

  delete(id:number)
  {
    return this.http.delete(this.commandUrl+'/delete/'+id);   
  }

  edit(data:Entity):Observable<any>
  {
    return  this.http.put(this.commandUrl+'/edit',data);
  }

   search(request:BaseRequestModel):Observable<any>
   {
      return this.http.post<any>(this.commandUrl+'/search',request);
   }
 
}
