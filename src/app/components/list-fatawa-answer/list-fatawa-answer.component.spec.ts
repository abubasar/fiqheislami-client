import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFatawaAnswerComponent } from './list-fatawa-answer.component';

describe('ListFatawaAnswerComponent', () => {
  let component: ListFatawaAnswerComponent;
  let fixture: ComponentFixture<ListFatawaAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFatawaAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFatawaAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
