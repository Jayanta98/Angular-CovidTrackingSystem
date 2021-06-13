import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { VaccineInformationComponent } from './vaccine-information/vaccine-information.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { PlasmaDonorListComponent } from './plasma-donor-list/plasma-donor-list.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { FormsModule } from '@angular/forms';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { PlasmaDonorViewComponent } from './plasma-donor-view/plasma-donor-view.component';
import { PlasmaDonorUpdateComponent } from './plasma-donor-update/plasma-donor-update.component';
import { PlasmaDonorCreateComponent } from './plasma-donor-create/plasma-donor-create.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientsListComponent,
    VaccineInformationComponent,
    GuidelinesComponent,
    EmergencyContactComponent,
    PlasmaDonorListComponent,
    PatientCreateComponent,
    PatientUpdateComponent,
    PatientViewComponent,
    PlasmaDonorViewComponent,
    PlasmaDonorUpdateComponent,
    PlasmaDonorCreateComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
