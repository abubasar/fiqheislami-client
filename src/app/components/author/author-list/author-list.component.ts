import { AuthorService } from 'src/app/services/author.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent extends BaseComponent<any> implements OnInit {
  reset() {
    throw new Error("Method not implemented.");
  }

  constructor(service:AuthorService) 
  {super(service)
   }

  ngOnInit() {
    this.search();
    this.searchForPaging();
  }

}
