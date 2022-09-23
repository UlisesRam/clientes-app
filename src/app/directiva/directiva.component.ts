import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent  {

  listaCurso:string[] = ['TS','JS','JavaEE','Python'];
  habilitar:boolean = true;

  constructor() { }

  setHabilitar(): void{
   this.habilitar = (this.habilitar==true)?false:true;
  }

}
