import { Status } from './model/Status';

import { Patient } from './model/Patient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  constructor(private http: HttpClient) { }
  private baseURL: string = 'http://localhost:9292';

  //http://localhost:9292/add-patient
  savePatient(patient: Patient): Observable<string> {
    return this.http.post<string>(this.baseURL + '/add-patient', patient);
  }
  //http://localhost:9292/patient?patientId=5
  getSinglePatientById(pID: Number): Observable<Patient> {
    return this.http.get<Patient>(this.baseURL + '/patient?patientId=' + pID);
  }

  //http://localhost:9292/patient-list
  getPatientList(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseURL + '/patient-list')
  }
  //http://localhost:9292/update-patient
  updatePatient(patient: Patient): Observable<string> {
    return this.http.put<string>(this.baseURL + '/update-patient', patient);
  }
  //http://localhost:9292/delete-patient?patientId=2
  deletePatientById(pID: Number): Observable<Status> {
    return this.http.delete<Status>(this.baseURL + '/delete-patient?patientId=' + pID);
  }


}
