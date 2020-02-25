import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  constructor(public _authService:AuthService) {
    
   }

  ngOnInit() {
  }

}
