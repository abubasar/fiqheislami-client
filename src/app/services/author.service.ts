import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends BaseService<any> {

  constructor(public http:HttpClient,url:UrlService) {
    super(http,url.author)
   }
}
