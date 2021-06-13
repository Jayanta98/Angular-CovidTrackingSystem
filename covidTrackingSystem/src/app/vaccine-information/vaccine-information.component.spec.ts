import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineInformationComponent } from './vaccine-information.component';

describe('VaccineInformationComponent', () => {
  let component: VaccineInformationComponent;
  let fixture: ComponentFixture<VaccineInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccineInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
