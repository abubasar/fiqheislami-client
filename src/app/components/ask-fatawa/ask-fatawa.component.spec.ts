import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskFatawaComponent } from "./ask-fatawa.component";

describe('AskFatawaComponent', () => {
  let component: AskFatawaComponent;
  let fixture: ComponentFixture<AskFatawaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskFatawaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskFatawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
