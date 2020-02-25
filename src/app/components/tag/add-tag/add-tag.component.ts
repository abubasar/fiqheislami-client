import { Entity } from 'src/app/entities/entity';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent extends BaseComponent<any> implements OnInit {
  reset() {
    this.model=new Entity()
  }

  constructor(service:TagService) {
    super(service)
   }

  ngOnInit() {
  }

}
