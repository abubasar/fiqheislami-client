import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { BaseComponent } from '../base/base.component';
import { ArticleService } from 'src/app/services/article.service';
import { BaseRequestModel } from 'src/app/entities/base-request-model';
import { Entity } from 'src/app/entities/entity';
import { CategoryService } from 'src/app/services/category.service';
import { TagService } from 'src/app/services/tag.service';
import { AuthorService } from 'src/app/services/author.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent extends BaseComponent<any> implements OnInit {
 
public Editor = ClassicEditor;
public config = {
  toolbar: [ 'heading', '|', 'bold', 'italic', '|', 'undo', 'redo', ]
};
article:any
categories:any[]
tags:any[]
authors:any[]
  constructor(private router:Router,private activatedRoute:ActivatedRoute, private http:HttpClient, public service:ArticleService,private categoryService:CategoryService,private tagService:TagService,private authorService:AuthorService) {
    super(service);
   //ClassicEditor.replace('body')
   
   }

  ngOnInit() {
   
    this.loadCategories();
    this.loadTags();
    this.loadAuthors();
   // this.generateReferenceId();
    this.get(this.activatedRoute.snapshot.params.id);
  }

  generateReferenceId(){
    this.service.generateReferenceId().subscribe(res=>{
      console.log(res);
     this.model.referenceNo=res.referenceNo;
      
  });
  }
  loadCategories(){
    var r=new BaseRequestModel();
    r.page=-1;
    r.orderBy="createdBy"
    this.categoryService.search(r).subscribe(res=>{
             this.categories=res;
             console.log(res)
    });
  }

  loadTags(){
    var r=new BaseRequestModel();
    r.page=-1;
    r.orderBy="createdBy"
    this.tagService.search(r).subscribe(res=>{
             this.tags=res;
             console.log(res)
    });
  }

  loadAuthors(){
    var r=new BaseRequestModel();
    r.page=-1;
    r.orderBy="createdBy"
    this.authorService.search(r).subscribe(res=>{
             this.authors=res;
             console.log(res)
    });
  }

  reset() {

    this.model=new Entity();
    for (var instance in ClassicEditor.instances){
      ClassicEditor.instances[instance].setData(" ");
   }
  
  }

  get(id:string){
    this.http.get(environment.baseApiUrl+'article/get/'+id).subscribe(res=>{
      console.log(res)
 this.article=res;
    })
   }

   editArticle(model:any){
    
     console.log(model.body)
    this.http.put(environment.baseApiUrl+'article/edit',model).subscribe(res=>{
      this.router.navigate(['article']);
      console.log(res)
 
    })
   }

}
