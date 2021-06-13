import { PatientserviceService } from './../patientservice.service';
import { Router } from '@angular/router';
import { Patient } from './../model/Patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnInit {

  constructor(private router: Router, private pService: PatientserviceService) {
    this.Pid = <Number>this.router.getCurrentNavigation().extras.state;

  }

  Pid: Number = new Number();
  patientViewModel: Patient = new Patient();



  ngOnInit(): void {

    this.loadSinglePatient();
  }

  loadSinglePatient() {
    this.pService.getSinglePatientById(this.Pid).subscribe(res => {
      this.patientViewModel = res;
    })
  }


}
