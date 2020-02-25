
import { HttpClient } from '@angular/common/http';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Entity } from 'src/app/entities/entity';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent extends BaseComponent<any> implements OnInit {
  reset() {
    this.model=new Entity();
  }
category:any
  constructor(public service:CategoryService,private activatedRoute:ActivatedRoute,private http:HttpClient) {
    super(service)
   }

  ngOnInit() {
      this.get(this.activatedRoute.snapshot.params.id);
    
  }

 

  get(id:string){
   this.http.get(environment.baseApiUrl+'category/get/'+id).subscribe(res=>{
     console.log(res)
this.model=res;
   })
  }

}
