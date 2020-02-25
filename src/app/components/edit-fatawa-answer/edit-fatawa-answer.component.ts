import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { FatawaAnswerService } from './../../services/fatawa-answer.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-fatawa-answer',
  templateUrl: './edit-fatawa-answer.component.html',
  styleUrls: ['./edit-fatawa-answer.component.scss']
})
export class EditFatawaAnswerComponent implements OnInit {
  public Editor = ClassicEditor;
model={}
  constructor(private service:FatawaAnswerService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.get(this.activatedRoute.snapshot.params.id);
  }
  editFatawaAnswer(){
    this.service.editFatawaAnswer(this.model).subscribe(res=>{
    this.router.navigate(['list-fatawa-answer'])
      console.log(res);
    })
  }

  get(id:string){
    this.service.getFatawa(id).subscribe(res=>{
      console.log(res)
 this.model=res;
    })
   }
  
}
