import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentoComponent } from './components/medicamento/medicamento.component';


const routes: Routes = [
  {
    path: "addMedicamento", 
    component: MedicamentoComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
