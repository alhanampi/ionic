import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(
    //se debe inyectar el controlador
    private popoverCrtl: PopoverController
  ) { }

  ngOnInit() {
  }

 async mostrarPop(evento) {
      const popover = await this.popoverCrtl.create({
        component: PopinfoComponent, //el popinfoControler de arriba. 
        event: evento,
        //Para hacer el posicionamientos, se debe indicar a ionic cuál es el evento que hizo click
        mode: 'ios', //se ve igual en ios y en android
        backdropDismiss: false //si no interactúa con el popover, no se cierra
      });
      await popover.present();

      const  {data} = await popover.onWillDismiss(); //respuesta del popinfo. Es onWillDismiss porque con onDidDismiss la respuesta llega tarde

      console.log('padre', data)
    }
  
  

}
