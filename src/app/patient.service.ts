import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Patiant } from './patiant';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = "http://localhost:8080/api/v1/patient";

  constructor(private http: HttpClient) { }

  getPatients():Observable<Patiant[]>{
    return this.http.get<Patiant[]>(`${this.baseUrl}`)
  }

  createPatient(Patients: Patiant): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, Patients);
  }

  updatePatient(id:number, patient:Patiant): Observable<object>{
    return this.http.put(`${this.baseUrl}/${id}`, patient);
  }

  deletePatient(id:number) : Observable<object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
