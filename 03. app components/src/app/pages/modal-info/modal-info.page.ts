import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { tick } from '@angular/core/src/render3';


@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  //esta es la info que se estaba mandando desde modal page
  @Input() nombre;
  @Input () pais;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  salirSinArg() {
    this.modalController.dismiss() //solo con esto va a salir directamente al hacer click
  }

  salirConArg() {
    this.modalController.dismiss({
      nombre: 'Felipe',
      país: 'Mexico'
    })
  };


}
