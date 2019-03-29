import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(
    //para usar un modal primero hay que inyectarlo
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
//para lanzar un modal primero hay que importar el modal controller
//esto va a tener que ser una promesa, así que la funcion tiene que tener async y el .this, ser una constante con await
  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        'nombre': 'Nombre1',
        'país': 'país'
      }
    })
    await modal.present()
  } //esto va a dar error si no agrego como entryComponent en modalModule

}
