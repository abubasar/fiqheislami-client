import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFatawaAnswerComponent } from './edit-fatawa-answer.component';

describe('EditFatawaAnswerComponent', () => {
  let component: EditFatawaAnswerComponent;
  let fixture: ComponentFixture<EditFatawaAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFatawaAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFatawaAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
