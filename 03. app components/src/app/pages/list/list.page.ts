import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  
    //importo la lista para poder cerrarla automáticamente:
    @ViewChild('lista') lista: IonList; //importo IonList para usar typescript.

  //esto también se importa automáticamente, y hay que especificarle que es tipo any
  usuarios: Observable<any>

  constructor(
    //traigo el servicio que creé para usuarios en data.service.ts:
    private dataService: DataService, //se importa automáticamente ese servicio
    private toastController: ToastController

  ) { }

  //la información de data service la traigo a ngOnInit
  ngOnInit() {
    this.usuarios = this.dataService.getUsers() //usuarios va a ser igual a lo que el dataService retorna
    
  }

  favorite (user){
//    console.log('favorite', user); puedo reemplazar esto por el toast:
    this.presentToast('se guardó en favorito')
    this.lista.closeSlidingItems(); //con esto se cierra al hacer click.
  }

  share (user){
//    console.log('share', user);
    this.presentToast('compartido')
    this.lista.closeSlidingItems()
  }

  delete (user){
//    console.log('delete', user);
    this.presentToast('eliminado')
    this.lista.closeSlidingItems()
  }

  unread (user){
//    console.log('unread', user);
    this.presentToast('marcar no leido')
    this.lista.closeSlidingItems()
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    })
    toast.present()
  }

}
