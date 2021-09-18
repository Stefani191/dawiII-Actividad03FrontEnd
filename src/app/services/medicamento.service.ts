import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicamento } from '../models/medicamento.model';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8021/rest/medicamento";

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  constructor(private http:HttpClient) { }

  create( data:Medicamento ): Observable<any>{

    return this.http.post( baseUrl,data )

  }
}
