import { Component, OnInit } from '@angular/core';

import { ActionSheetController} from '@ionic/angular' //para usar los action se debe importar el module


@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(
    private actionSheetCntrl:ActionSheetController 
  ) { }

  ngOnInit() {
  }
//async es promesa, acción asimétrica. Await espera a que se haya creado el action sheet.
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCntrl.create({
      header: 'Albums',
      backdropDismiss: false, //evitar que se cierre al apretar en cualquier lado
      buttons: [{
        text: 'Delete',
        role: 'destructive', //en ios destructive se ve rojo
        icon: 'trash',
        cssClass: 'rojo', //clase personalizada para que se vea en rojo en android. Para que funcione hay que ponerlo en el global.
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel', //cancel funciona apretando afuera del modal también. Se puede evitar usando backdropDismiss: false. 
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present(); //present muestra al action sheet
  }

}

