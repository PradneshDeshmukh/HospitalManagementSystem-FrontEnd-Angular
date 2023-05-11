import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patiant } from '../patiant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  // patiants:any | undefined;

   patients: Patiant[] | any;

  // constructor(private patientService: PatientService){}

  // ngOnInit():void{
  //   this.patientService.getPatients().subscribe((data:Patiant[])=>{
  //     console.log(data);
  //     this.patients = data;
  //   });
  // }

  constructor(private patientService: PatientService, 
    private router: Router){}

  ngOnInit(): void {
  this.getPatients()
  }

  private getPatients(){
    this.patientService.getPatients().subscribe(data =>{
      this.patients = data;
    });
  }
  

  updatePatient(id:number){
    this.router.navigate(['update-patient', id])
  }
  
  deletPatient(id:number){
    this.patientService.deletePatient(id).subscribe(data =>{
      console.log(data);
      this.getPatients();
    })
  }

}
