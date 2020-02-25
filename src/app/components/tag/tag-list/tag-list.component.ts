import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent extends BaseComponent<any> implements OnInit {
  reset() {
    throw new Error("Method not implemented.");
  }

  constructor(service:TagService) 
  {super(service) }

  ngOnInit() {
    this.search();
    this.searchForPaging();
  }

}
