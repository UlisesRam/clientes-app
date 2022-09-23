import { Component, OnInit } from '@angular/core';
import {Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes:Cliente[] = [
    {id: 1, nombre:'Fabian', apellido:'Ramirez', email:'fabian.ramirez3107@gmail.com', createAt:'2022-09-23'},
    {id: 2, nombre:'Fabian2', apellido:'Ramirez2', email:'fabian@gmail.com', createAt:'2022-09-23'},
    {id: 3, nombre:'Fabian3', apellido:'Ramirez3', email:'ramirez3107@gmail.com', createAt:'2022-09-23'},
    {id: 4, nombre:'Fabian4', apellido:'Ramirez4', email:'3107@gmail.com', createAt:'2022-09-23'},
    {id: 5, nombre:'Fabian5', apellido:'Ramirez5', email:'fab.ram3107@gmail.com', createAt:'2022-09-23'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
