import { Status } from './../model/Status';
import { Donor } from './../model/Donor';
import { DonorserviceService } from './../donorservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-plasma-donor-list',
  templateUrl: './plasma-donor-list.component.html',
  styleUrls: ['./plasma-donor-list.component.css']
})
export class PlasmaDonorListComponent implements OnInit {

  constructor(private router: Router, private dService: DonorserviceService, private location: Location) {
    this.loadAllDoner();
  }

  ngOnInit(): void {
    this.loadAllDoner();
  }

  donerList: Donor[];
  loadAllDoner() {
    this.dService.getAllDonor().subscribe(res => {
      this.donerList = res;
    })

  }
  viewDonor(id) {
    this.router.navigateByUrl('/view-donor', { state: id });
  }
  updateDonor(idd) {

    this.router.navigateByUrl('/update-donor', { state: idd });
  }
  deleteStatus: Status;
  deleteDonor(id) {

    var choice = confirm("Do you really want to Delete this Plasma Donor Details ?");
    if (choice == true) {
      this.dService.deleteDonorById(id).subscribe(res => {
        this.deleteStatus.message = res;


      });
      this.router.navigate(['/home'])


    } else {
      this.router.navigate(['/plasma-donor-list']);
    }
  }

}
