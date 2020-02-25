import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { BaseComponent } from '../base/base.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.sass']
})
export class ArticleDetailComponent extends BaseComponent<any> implements OnInit {
  reset() {
    throw new Error("Method not implemented.");
  }

  constructor(service:ArticleService,private activatedRoute:ActivatedRoute,private http:HttpClient) {
    super(service)
   }
article:any
  ngOnInit() {
      this.get(this.activatedRoute.snapshot.params.id)

  }

  get(id:string){
   this.http.get(environment.baseApiUrl+'article/getDetail/'+id).subscribe(res=>{
     console.log(res)
this.article=res;
   })
  }

}
