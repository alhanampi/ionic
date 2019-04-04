import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  //esto va a verse reflejado en el popover, es la info de adentro. Acá podría ha ber botones, etc-

  items = Array(40);

  constructor(
    //esta página fue lanzada por un popover controler, así que necesito inyectarlo acá
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {}


  onClick(valor: number) {

    console.log('item', valor)
    this.popoverCtrl.dismiss({ //sin el dismiss no cierra
      item: valor //le paso lo que el usuario haya seleccionado
    })
  }
}
