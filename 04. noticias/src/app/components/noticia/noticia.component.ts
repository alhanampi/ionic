import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';

import { ActionSheetController, Platform } from '@ionic/angular';

//importo los plugin en app.modules y también acá
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  //necesito recibir dos cosas: noticia e indice
  @Input() noticia: Article
  @Input() indice: number;
  @Input() enFavoritos; //no necesita tipo porque lo envío desde el padre, que es noticias, así que el falso ya lo tiene


  constructor(
    //inyecto el plugin:
    private iab: InAppBrowser,
    private socialSharing: SocialSharing,
    private actionSheetCtrl: ActionSheetController,
    private dataLocalService: DataLocalService,
    private platform: Platform,
  ) { }




  ngOnInit() {
    console.log('favoritos', this.enFavoritos)
  }

  //no ncesito recibir el url como argumento porque ya lo tengo en noticia
  abrirNoticia() {
    //llamo al plugin. Con system lo abre en el navegador por defecto:    
    const browser = this.iab.create(this.noticia.url, '_system');
  }

  //desplegar action sheet. Copiado de la documentacion y modificado:
  async lanzarMenu() {
    //para que el boton de favorito se comporte diferente en la seccion de favorito:
    let guardarBorrarBtn;

    if (this.enFavoritos) {
      guardarBorrarBtn = {
        text: 'borrar favorito',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          console.log('favorito clicked');
          this.dataLocalService.borrarNoticia(this.noticia) //trae del servicio de data-local

        },
      }
    } else {
      guardarBorrarBtn = {
        text: 'guardar Favorito',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          console.log('guardar clicked');
          this.dataLocalService.guardarNoticia(this.noticia) //trae del servicio de data-local
        },
      }
    }

    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-dark', //es global, no va a funcionar si lo modifico en noticia.component
        handler: () => {
          console.log('Share clicked');

          this.compartirNoticia() //no requiere argumentos porque noticia es global
          // this.socialSharing.share( //esto solo se puede probar desde dispositivo movil. Este código se va abajo a compartir noticia
          //   this.noticia.title,
          //   this.noticia.source.name,
          //   '',
          //   this.noticia.url
          // )
        }
      }, guardarBorrarBtn,
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

  }

  //al hacer deploy da problemas con compartir, entonces hay que hacer esta solucion:
  compartirNoticia() { //esto solo existe si existe cordova. En app.component está platform, que da informacion sobre los dispositivos. La importa acá
    if (this.platform.is('cordova')) {
      //con is se pueden comprobar muchas cosas
      
      this.socialSharing.share(
        this.noticia.title,
        this.noticia.source.name,
        '',
        this.noticia.url
        )
      } else { //si no soporta cordova
        if (navigator['share']) { //share es una propiedad muy nueva, por eso puede llegar a no reconocerla si no la pongo en ['']
          navigator['share']({
              title: this.noticia.title,
              text: this.noticia.description,
              url: this.noticia.url
          })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        } else { //si no soporta ni cordova ni share. Es el caso de los navegadores web.
          console.log('no se puede compartir porque no hay soporte')
        }
      }
  }
}