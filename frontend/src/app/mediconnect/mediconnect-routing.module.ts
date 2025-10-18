import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientCreateComponent } from '../mediconnect/components/patientcreate/patientcreate.component';

const routes: Routes = [
  { path:'patient-create', component: PatientCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediConnectRoutingModule {}
