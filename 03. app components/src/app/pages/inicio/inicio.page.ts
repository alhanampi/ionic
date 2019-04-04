import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces' //importo el archivo de interfaces.ts
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>


//redireccion desde el inicio. Eliminada porque esto ahora está en el menú draggeable. Ahora componente es un array vacio
   //componentes: Componente[] = []
  //   {
  //     icon: 'build',
  //     name: 'Action Sheet',
  //     redirectTo: '/action-sheet'
  //   },
  //   {
  //     icon: 'appstore',
  //     name: 'Alert',
  //     redirectTo: '/alert'
  //   },
  //   {
  //     icon: 'beaker',
  //     name: 'avatar',
  //     redirectTo: '/avatar'
  //   },
  //   {
  //     icon: 'construct',
  //     name: 'buttons y router',
  //     redirectTo: '/buttons'
  //   },
  //   {
  //     icon: 'card',
  //     name: 'card',
  //     redirectTo: '/card'
  //   },
  //   {
  //     icon: 'checkbox',
  //     name: 'checkbox',
  //     redirectTo: '/checkbox'
  //   },
  //   {
  //     icon: 'time',
  //     name: 'datetime',
  //     redirectTo: '/datetime'
  //   },
  //   {
  //     icon: 'eye',
  //     name: 'fab',
  //     redirectTo: '/fab'
  //   },
  //   {
  //     icon: 'grid',
  //     name: 'grid - row',
  //     redirectTo: '/grid'
  //   },
  //   {
  //     icon: 'infinite',
  //     name: 'infinite-scroll',
  //     redirectTo: '/infinite-scroll'
  //   },
  //   {
  //     icon: 'browsers',
  //     name: 'input',
  //     redirectTo: '/input'
  //   },
  //   {
  //     icon: 'list',
  //     name: 'list - slide',
  //     redirectTo: '/list'
  //   },
  //   {
  //     icon: 'swap',
  //     name: 'list reoder',
  //     redirectTo: '/list-reorder'
  //   },
  //   {
  //     icon: 'timer',
  //     name: 'loading',
  //     redirectTo: '/loading'
  //   },
  
  // ]

  //hay que inyectar menu controller para que el boton del menu funcione
  constructor(
    private menuctrl: MenuController, //con tab lo importa automáticamente
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions()
  }

  toggleMenu() {
    this.menuctrl.toggle() //cuando existe un solo menu, va a automáticamente servir para ese
  }

}

//esta interfaz va a ser usada en varios lugares, así que se crea una carpeta de interfaces
// // interface Componente {
// //   icon: string;
// //   name: string;
// //   redirectTo: string;
// // }