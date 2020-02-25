
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Entity } from 'src/app/entities/entity';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent extends BaseComponent<any> implements OnInit {
  reset() {
   this.model=new Entity();
  }

  constructor(public service:CategoryService) {
   
    super(service)
    
   }

  ngOnInit() {
  
  }

}
