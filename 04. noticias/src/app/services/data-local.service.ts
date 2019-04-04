import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [] //empieza como array vacío

  constructor(
    private storage: Storage,
    public toastCtrl: ToastController
  ) {
    //llamo a la funcion cuando se necesita del storage, por eso está acá. Se inicializa cuando se quiere cargar o se quiere grabar.
    this.cargarFavoritos()
   }

  //guardar data en storage y hacer push en noticias
  guardarNoticia(noticia: Article) {
    //me fijo primero si la noticia que estoy pasando ya existe, si no existe la grabo
    const existe = this.noticias.find(noti => noti.title === noticia.title)
    
    if (!existe) {

      this.noticias.unshift(noticia); //unshift es para que esté al ppio del array
      this.storage.set('favoritos', this.noticias)
    }
    this.presentToast('agregado a favoritos')
  }


//no requiere argumentos, debe leer storage y cargar info:
  async cargarFavoritos() {
    const favoritos = await this.storage.get('favoritos')

    if (favoritos) {
      this.noticias = favoritos //cuando la funcion dispare, va a meter ahi los favoritos
    } //no requiere un else porque por defecto es un array vacío si no hay favoritos guardados.
    }
  
     borrarNoticia(noticia: Article) {
      //noticias son las que están guardadas. la noticia interna tiene que tener nombre diferente a la que estoy recibiendo. Entonces va a retornar un array sin esa noticia en particular
     this.noticias = this.noticias.filter(noti => noti.title !== noticia.title);
     this.storage.set('favoritos', this.noticias)  //grabo en el storage el resultado
     this.presentToast('borrado de favoritos')
    }

    //mostrar un toast al guardar noticias:

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
}
}