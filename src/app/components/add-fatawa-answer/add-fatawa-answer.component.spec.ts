import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFatawaAnswerComponent } from './add-fatawa-answer.component';

describe('AddFatawaAnswerComponent', () => {
  let component: AddFatawaAnswerComponent;
  let fixture: ComponentFixture<AddFatawaAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFatawaAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFatawaAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
