import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  //para que tenga un valor por defecto al inicializar:
  @ViewChild(IonSegment) segment: IonSegment;

  //array para mostrar categorias de titulares:
  categorias = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ]

  noticias: Article[] = []

  //constructor para llamar al servicio con el que cargo las noticias:

  constructor(
    private noticiasService: NoticiasService
  ) { }


  ngOnInit() {
    //este codigo se va a reutilizar, por lo tanto puedo pasarlo como una funcion:
    this.segment.value = this.categorias[2]
    // this.noticiasService.getTopHearlinesCat(this.categorias[2])
    //   .subscribe(resp => {
    //     this.noticias.push( ...resp.articles);
    //   })
    this.cargarNoticias(this.categorias[2])

  }

  cambioCategoria(event) {
    this.noticias = [] //con esto reseteo, porque sino cada vez que llamo a una categoría nueva me la suma abajo

    this.cargarNoticias(event.detail.value)
  }

  cargarNoticias(categoria: string, event?) {

    this.noticiasService.getTopHearlinesCat(categoria)
      .subscribe(resp => {
        this.noticias.push(...resp.articles);

        if (event) {
          event.target.complete()
        }
      })
  }

  loadData(event) {
    this.cargarNoticias(this.segment.value, event);
  }

}
