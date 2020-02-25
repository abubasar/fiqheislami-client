import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-all-article',
  templateUrl: './all-article.component.html',
  styleUrls: ['./all-article.component.scss']
})
export class AllArticleComponent extends BaseComponent<any> implements OnInit {
  reset() {
    throw new Error("Method not implemented.");
  }

  constructor(service:ArticleService) { 
    super(service);
  }

  ngOnInit() {
    this.search();
    this.searchForPaging();
  }

}
