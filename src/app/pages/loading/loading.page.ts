import { Component, OnInit } from '@angular/core';
import { LoadingController} from '@ionic/angular'

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any; //para poder cancelar el loading
  //crear un private de loadingController en el constructor, importar desde @ionic/angular, y copiar el código del controlador que está en la documentación
  constructor(
    private loadingControl: LoadingController
  ) { }

  ngOnInit() {
    //llamo con ngOnInit al async
    this.presentLoading('espere por favor')
    setTimeout(() => {
      this.loading.dismiss() //para cancelar
    }, 1500);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingControl.create({
      message //se puede pasar acá el mensaje, o ponerlo arriba en el presentLoading.
      //duration: 2000 //cuánto tiempo va a estar el cartel de loading, sin embargo es poco probable que se use
    });
    return this.loading.present();

     }

}
