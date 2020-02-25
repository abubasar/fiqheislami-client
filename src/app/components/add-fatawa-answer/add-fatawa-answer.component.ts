import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { FatawaAnswer } from './../../entities/fatawa-answer';

import { FatawaAnswerService } from './../../services/fatawa-answer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fatawa-answer',
  templateUrl: './add-fatawa-answer.component.html',
  styleUrls: ['./add-fatawa-answer.component.scss']
})
export class AddFatawaAnswerComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor(private service:FatawaAnswerService,private router:Router) {
    this.model=new FatawaAnswer();
    this.model.question="write here"
    this.model.answer="write here"
   }
model:FatawaAnswer
  ngOnInit() {
    this.generateReferenceId();
  }

saveFatawaAnswer(){
  this.service.saveFatawaAnswer(this.model).subscribe(res=>{
    this.router.navigate(['list-fatawa-answer'])
    console.log(res);
  })
}

generateReferenceId(){
  this.service.generateFatawaNo().subscribe(res=>{
    console.log(res);
   this.model.questionNo=res.referenceNo;
    
});
}

}
