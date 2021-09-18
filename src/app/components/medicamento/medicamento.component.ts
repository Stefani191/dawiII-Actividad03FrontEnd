import { Component, OnInit } from '@angular/core';
import { MedicamentoService } from '../../services/medicamento.service';
import { Medicamento } from '../../models/medicamento.model';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit {

  constructor(private medicamentoService:MedicamentoService) { }

  medicamento: Medicamento = {};

  saveMedicamento(){
    console.log(">> saveMedicamento<<");
    console.log(this.medicamento);
    console.log(">>saveMedicamento<<");
    this.medicamentoService.create(this.medicamento).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje);
      },
      error => {
        alert(error);
      },
    );
  }

  ngOnInit(): void {
  }

}
