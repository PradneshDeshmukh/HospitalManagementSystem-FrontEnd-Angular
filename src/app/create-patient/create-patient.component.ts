import { Component } from '@angular/core';
import { Patiant } from '../patiant';
import { PatientService } from '../patient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent {

  patient:Patiant = new Patiant();

  constructor(private patientService: PatientService, 
    private router: Router){}


  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data =>{
      console.log(data);
      this.goToPatientList();

    },
    error => console.log(error)
    );
  }

  goToPatientList(){
    this.router.navigate(['/patients'])
  }

  onSubmit(){
    console.log(this.patient);
    this.savePatient();
  }


}
