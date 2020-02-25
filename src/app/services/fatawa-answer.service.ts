import { UrlService } from './url.service';
import { BaseService } from 'src/app/services/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseRequestModel } from '../entities/base-request-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FatawaAnswerService extends BaseService<any> {
baseUrl=environment.baseApiUrl+"fatawa-answer/"
  constructor(http:HttpClient, url:UrlService) {
    super(http,url.fatawaAnswer)
   }


  saveFatawaAnswer(model:any):Observable<any>{
return this.http.post(this.baseUrl+'add',model);
  }

  searchFatawaAnswer(request:BaseRequestModel):Observable<any>{
   
    return this.http.post<any>(this.baseUrl+'search',request);
 }

 
editFatawaAnswer(model:any):Observable<any>{
   
  return this.http.put<any>(this.baseUrl+'edit',model);
}

getFatawa(id:string):Observable<any>{
  return this.http.get<any>(this.baseUrl+'get/'+id);
  
}
delete(id:number){
  return this.http.delete(this.baseUrl+'delete/'+id);
  
}

generateFatawaNo():Observable<any>{
  return this.http.get<any>(this.baseUrl+'reference-no');
}

}
