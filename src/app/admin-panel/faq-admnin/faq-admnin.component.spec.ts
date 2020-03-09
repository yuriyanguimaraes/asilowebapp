import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqAdmninComponent } from './faq-admnin.component';

describe('FaqAdmninComponent', () => {
  let component: FaqAdmninComponent;
  let fixture: ComponentFixture<FaqAdmninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqAdmninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqAdmninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
