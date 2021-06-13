import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmaDonorViewComponent } from './plasma-donor-view.component';

describe('PlasmaDonorViewComponent', () => {
  let component: PlasmaDonorViewComponent;
  let fixture: ComponentFixture<PlasmaDonorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlasmaDonorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasmaDonorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
