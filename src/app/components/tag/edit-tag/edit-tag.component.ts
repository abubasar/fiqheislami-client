import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { TagService } from 'src/app/services/tag.service';
import { HttpClient } from '@angular/common/http';
import { Entity } from 'src/app/entities/entity';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.scss']
})
export class EditTagComponent extends BaseComponent<any> implements OnInit {
  reset() {
    this.model=new Entity()
  }

  constructor(service:TagService,private activatedRoute:ActivatedRoute,private http:HttpClient) {
    super(service)
   }
//tag:any
  ngOnInit() {
      this.get(this.activatedRoute.snapshot.params.id);
    
  }

  get(id:string){
   this.http.get(environment.baseApiUrl+'tag/get/'+id).subscribe(res=>{
     console.log(res)
this.model=res;
   })
  }

}
