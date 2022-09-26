import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndPoint:string = 'http://localhost:8080/api/clientes';
  
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    // return of(CLIENTES);
    return this.http.get<Cliente[]>(this.urlEndPoint) //hacer un cast a tipo Cliente[], ya que por default es <any>
  }
}
