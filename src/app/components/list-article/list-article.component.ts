import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { BaseComponent } from '../base/base.component';
import { CategoryService } from 'src/app/services/category.service';
import { BaseRequestModel } from 'src/app/entities/base-request-model';
import { AuthorService } from 'src/app/services/author.service';
import { TagService } from 'src/app/services/tag.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent extends BaseComponent<any> implements OnInit {
  reset() {
    throw new Error("Method not implemented.");
  }
myCarouselOptions={items: 1,autoplay:true,loop:true,dots:false, nav: false,rewind:true};
categories:any[]
authors:any[]
tags:any[]
category:string="All"
  constructor(service:ArticleService,private categoryService:CategoryService
    ,private authorService:AuthorService,private tagService:TagService,public _authService:AuthService) {
    super(service)
   }

  ngOnInit() {
    this.search();
    this.loadCategories();
    this.loadAuthors();
    this.loadTags();
    this.searchForPaging();
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

  loadAuthors(){
    var r=new BaseRequestModel();
    r.page=-1;
    r.orderBy="createdBy"
    this.authorService.search(r).subscribe(res=>{
             this.authors=res;
             
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

  searchByCategory(name:string){
    this.category=name
    var r=new BaseRequestModel();
    r.category=name;
    r.orderBy="createdBy"
    this.service.search(r).subscribe(res=>{
      this.models=res
       if (this.models.length === 0) {
        console.log('No search result found');
       this.models=[
         {
           "headLine":"এখনও কোন লেখা অন্তর্ভুক্ত করা হই নি"
         }
       ]
      }
      console.log(res)
    })
  }

  searchByAuthor(name:string){
    this.category=name
    var r=new BaseRequestModel();
    r.author=name;
    r.orderBy="createdBy"
    this.service.search(r).subscribe(res=>{
      this.models=res
       if (this.models.length === 0) {
        console.log('No search result found');
       this.models=[
         {
           "headLine":"এখনও কোন লেখা অন্তর্ভুক্ত করা হই  নি"
         }
       ]
      }
      console.log(res)
    })
  }

  searchByTag(name:string){
    this.category=name
    var r=new BaseRequestModel();
    r.tag=name;
    r.orderBy="createdBy"
    this.service.search(r).subscribe(res=>{
      this.models=res
       if (this.models.length === 0) {
        console.log('No search result found');
       this.models=[
         {
           "headLine":"এখনও কোন লেখা অন্তর্ভুক্ত করা হই  নি"
         }
       ]
      }
      console.log(res)
    })
  }

}
