import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FproductComponent } from './fproduct.component';

describe('FproductComponent', () => {
  let component: FproductComponent;
  let fixture: ComponentFixture<FproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
