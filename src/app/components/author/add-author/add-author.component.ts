import { AuthorService } from './../../../services/author.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Entity } from 'src/app/entities/entity';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent extends BaseComponent<any> implements OnInit {
  reset() {
    this.model=new Entity();  }

  constructor(service:AuthorService) {
    super(service)
   }

  ngOnInit() {
  }

}
