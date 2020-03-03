import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbannerComponent } from './fbanner.component';

describe('FbannerComponent', () => {
  let component: FbannerComponent;
  let fixture: ComponentFixture<FbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
