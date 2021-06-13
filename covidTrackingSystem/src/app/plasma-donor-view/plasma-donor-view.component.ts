import { DonorserviceService } from './../donorservice.service';
import { Router } from '@angular/router';
import { Donor } from './../model/Donor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plasma-donor-view',
  templateUrl: './plasma-donor-view.component.html',
  styleUrls: ['./plasma-donor-view.component.css']
})
export class PlasmaDonorViewComponent implements OnInit {

  constructor(private router:Router,private dService:DonorserviceService) {
    this.getID=<Number> this.router.getCurrentNavigation().extras.state
   }
  donorViewModel:Donor=new Donor();
  getID:Number;

  loadSingleDonor(){
    this.dService.getSingleDonorById(this.getID).subscribe(res=>{
      this.donorViewModel=res;
    })
  }
 

  ngOnInit(): void {
  
    this.loadSingleDonor();
  }

}
