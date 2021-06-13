import { Status } from './../model/Status';
import { PatientserviceService } from './../patientservice.service';
import { Patient } from './../model/Patient';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  constructor(private router: Router, private pService: PatientserviceService, private location: Location) {
    this.loadAllPatient();
  }
  patientList: Patient[];
  loadAllPatient() {
    this.pService.getPatientList().subscribe(res => {
      this.patientList = res;
    })
  }

  ngOnInit(): void {
    this.loadAllPatient();
  }
  viewPatient(id: Number) {
    //here we will pass Id
    this.router.navigateByUrl('/view-patient', { state: id });

  }
  updatePatient(id: Number) {

    this.router.navigateByUrl('/update-patient', { state: id });
  }
  deleteStatus: Status;
  deletePatient(id: Number) {
    //always take object from the backend then only the subscribe work
    var choice = confirm("Do you really want to Delete this Patient Details ?");
    if (choice == true) {
      this.pService.deletePatientById(id).subscribe(res => {
        this.deleteStatus = res;
        this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
          this.router.navigate([decodeURI(this.location.path())]);
        });

      });


    } else {
      this.router.navigate(['/patients-list']);
    }
  }

}
