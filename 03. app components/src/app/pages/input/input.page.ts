import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string; //solamente se está declarando acá.

  usuario = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate() {
    console.log('form submitted')
    console.log(this.usuario) //la info que el usuario escribe en el formulario
  }

}
