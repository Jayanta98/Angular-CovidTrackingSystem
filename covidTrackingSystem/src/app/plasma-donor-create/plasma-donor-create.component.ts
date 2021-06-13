import { Donor } from './../model/Donor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorserviceService } from '../donorservice.service';

@Component({
  selector: 'app-plasma-donor-create',
  templateUrl: './plasma-donor-create.component.html',
  styleUrls: ['./plasma-donor-create.component.css']
})
export class PlasmaDonorCreateComponent implements OnInit {


  constructor(private router: Router, private dService: DonorserviceService) {

  }
  donorModel: Donor = new Donor();
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  ngOnInit(): void {
  }
  status: any;
  onSubmitDonor() {

    this.dService.saveDonor(this.donorModel).subscribe(res => {
      this.status = res;

    });
    this.router.navigate(['/home']);
  }

}
