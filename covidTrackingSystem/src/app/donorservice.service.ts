import { Observable } from 'rxjs';
import { Donor } from './model/Donor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonorserviceService {

  constructor(private http: HttpClient) { }
  private baseURL: string = 'http://localhost:9292';


  //http://localhost:9292/add-donor
  saveDonor(donor: Donor): Observable<string> {
    return this.http.post<string>(this.baseURL + '/add-donor', donor);

  }
  //http://localhost:9292/donor?dID=12
  getSingleDonorById(dId: Number): Observable<Donor> {
    return this.http.get<Donor>(this.baseURL + '/donor?dID=' + dId);
  }
  //http://localhost:9292/donor-list
  getAllDonor(): Observable<Donor[]> {
    return this.http.get<Donor[]>(this.baseURL + '/donor-list');

  }

  //http://localhost:9292/update-donor
  updateDonor(donor: Donor): Observable<string> {
    return this.http.put<string>(this.baseURL + '/update-donor', donor);
  }

  //http://localhost:9292/delete-donor?donorId=10

  deleteDonorById(id: Number): Observable<string> {
    return this.http.delete<string>(this.baseURL + '/delete-donor?donorId=' + id);
  }
}
