import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

const routes: Routes = [
  // {path:'patients', component:PatientComponent},
  {path:'patients', component:PatientComponent},
  {path:'create-patient', component: CreatePatientComponent},
  {path:'update-patient/:id', component: UpdatePatientComponent},
  {path:'', redirectTo:'patients', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
