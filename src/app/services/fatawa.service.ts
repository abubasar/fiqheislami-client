import { BaseService } from 'src/app/services/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FatawaService extends BaseService<any> {
  constructor(public http:HttpClient,url:UrlService) { 
    super(http,url.fatawa)
  }

  saveFatawa(model:any):Observable<any>{
    return this.http.post(environment.baseApiUrl+'fatawa/addFatawa',model);
  }
}
