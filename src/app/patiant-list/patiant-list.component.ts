import { Component } from '@angular/core';
import { Patiant } from '../patiant';
import { PatientService } from '../patient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patiant-list',
  templateUrl: './patiant-list.component.html',
  styleUrls: ['./patiant-list.component.css']
})
export class PatiantListComponent {

  patiants:Patiant[] | any;

  constructor(private patientService: PatientService, 
    private router: Router){}

  ngOnInit(): void {
  this.getPatients()
  }

  private getPatients(){
    this.patientService.getPatients().subscribe(data =>{
      this.patiants = data;
    });
  }
  

  updatePatient(id:number){
    this.router.navigate(['update-patient', id])
  }
}
