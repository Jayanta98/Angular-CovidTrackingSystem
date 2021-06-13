import { ErrorComponent } from './error/error.component';
import { PlasmaDonorUpdateComponent } from './plasma-donor-update/plasma-donor-update.component';
import { PlasmaDonorViewComponent } from './plasma-donor-view/plasma-donor-view.component';
import { PlasmaDonorCreateComponent } from './plasma-donor-create/plasma-donor-create.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { PlasmaDonorListComponent } from './plasma-donor-list/plasma-donor-list.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { VaccineInformationComponent } from './vaccine-information/vaccine-information.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'patients-list', component: PatientsListComponent },
  { path: 'vaccine-information', component: VaccineInformationComponent },
  { path: 'guidelines', component: GuidelinesComponent },
  { path: 'emergency-contact', component: EmergencyContactComponent },
  { path: 'plasma-donor-list', component: PlasmaDonorListComponent },
  { path: 'add-patient', component: PatientCreateComponent },
  { path: 'view-patient', component: PatientViewComponent },
  { path: 'update-patient', component: PatientUpdateComponent },
  { path: 'add-donor', component: PlasmaDonorCreateComponent },
  { path: 'view-donor', component: PlasmaDonorViewComponent },
  { path: 'update-donor', component: PlasmaDonorUpdateComponent },
  { path: 'error', component: ErrorComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
