import { Component } from '@angular/core';
import { Patiant } from '../patiant';
import { PatientService } from '../patient.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent {

  patient:Patiant = new Patiant();
  id:number | any;

  constructor(private patientService: PatientService, 
    private router: Router){}

  onSubmit(){
    this.patientService.updatePatient(this.id, this.patient).subscribe(data=>{
      this.goToPatientList();
    },
    error => console.log(error)
    );
  }

  goToPatientList(){
    this.router.navigate(['/patients'])
  }
  
}
