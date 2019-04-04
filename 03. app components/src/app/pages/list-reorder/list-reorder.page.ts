import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['sdsdsd', 'vcvcvc', 'kjkjkj', 'ewewew', 'trtrtrt']

  constructor() { }

  ngOnInit() {
  }

  //para evitar que se trabe
  reorder(event) {
    console.log(event); //este console.log da varios datos y entre ellos del detail, que muestra de qué posición a cuál va.
    const itemMov = this.personajes.splice(event.detail.from, 1)[0] 
    //remuevo el item que quiero mover con splice. Siempre el item a mover va a estar en posicion 0
    this.personajes.splice(event.detail.to, 0,itemMov) //0 porque no quiero ELIMINAR, quiero insertar el item que saqué con itemMov
    event.detail.complete();
  }

  onClick() {
    console.log(this.personajes) //imprimir el nuevo orden del array
  }

}
