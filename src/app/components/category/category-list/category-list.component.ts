
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent extends BaseComponent<any> implements OnInit {
  reset() {
  console.log("not implemented")
  }
categories:any[]
  constructor(public service:CategoryService) {
    super(service)
   
   }

  ngOnInit() {
  
   this.search();
   this.searchForPaging()
  }
 
  
  
}
