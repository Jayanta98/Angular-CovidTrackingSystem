import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmaDonorListComponent } from './plasma-donor-list.component';

describe('PlasmaDonorListComponent', () => {
  let component: PlasmaDonorListComponent;
  let fixture: ComponentFixture<PlasmaDonorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlasmaDonorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasmaDonorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
