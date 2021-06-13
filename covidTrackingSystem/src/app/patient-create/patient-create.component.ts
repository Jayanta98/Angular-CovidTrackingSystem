import { Status } from './../model/Status';
import { PatientserviceService } from './../patientservice.service';
import { Router } from '@angular/router';
import { Patient } from './../model/Patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  constructor(private router: Router, private pService: PatientserviceService) { }


  patientModel: Patient = new Patient();
  status: Status = new Status();
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  ngOnInit(): void {
  }



  onSubmit() {

    this.pService.savePatient(this.patientModel).subscribe((res) => {
      this.status.message = res;

      this.router.navigate(['/patients-list']);

    });


  }

}
