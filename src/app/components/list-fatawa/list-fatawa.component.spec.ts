import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFatawaComponent } from './list-fatawa.component';

describe('ListFatawaComponent', () => {
  let component: ListFatawaComponent;
  let fixture: ComponentFixture<ListFatawaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFatawaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFatawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
