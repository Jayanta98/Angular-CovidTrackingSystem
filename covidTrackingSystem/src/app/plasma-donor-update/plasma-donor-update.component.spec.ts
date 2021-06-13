import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmaDonorUpdateComponent } from './plasma-donor-update.component';

describe('PlasmaDonorUpdateComponent', () => {
  let component: PlasmaDonorUpdateComponent;
  let fixture: ComponentFixture<PlasmaDonorUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlasmaDonorUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasmaDonorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
