import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmaDonorCreateComponent } from './plasma-donor-create.component';

describe('PlasmaDonorCreateComponent', () => {
  let component: PlasmaDonorCreateComponent;
  let fixture: ComponentFixture<PlasmaDonorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlasmaDonorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasmaDonorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
