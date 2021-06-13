import { DonorserviceService } from './../donorservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donor } from '../model/Donor';

@Component({
  selector: 'app-plasma-donor-update',
  templateUrl: './plasma-donor-update.component.html',
  styleUrls: ['./plasma-donor-update.component.css']
})
export class PlasmaDonorUpdateComponent implements OnInit {

  constructor(private router: Router, private dService: DonorserviceService) {
    this.Did = <Number>this.router.getCurrentNavigation().extras.state;

  }
  Did: Number;
  updateDonorModel: Donor = new Donor();
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";


  loadTheDoner() {
    this.dService.getSingleDonorById(this.Did).subscribe(res => {
      this.updateDonorModel = res;
    })
  }
  ngOnInit(): void {
    this.loadTheDoner();
  }


  msg: string;
  onUpdateDonor() {

    this.dService.updateDonor(this.updateDonorModel).subscribe(res => {
      this.msg = res;
    });
    this.router.navigate(['/home'])
  }

}
