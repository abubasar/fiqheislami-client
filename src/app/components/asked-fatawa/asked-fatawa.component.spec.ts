import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskedFatawaComponent } from './asked-fatawa.component';

describe('AskedFatawaComponent', () => {
  let component: AskedFatawaComponent;
  let fixture: ComponentFixture<AskedFatawaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskedFatawaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskedFatawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
