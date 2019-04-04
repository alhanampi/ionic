import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
//ver por qué no anda

@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;


  data:any[] = Array(20)

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log('cargando siguientes');
//agregar datos al array que se cargaba con data. ... es spread. Al 1 seg se pushean 20 nuevos elementos.
    setTimeout(() => {

      //al llegar a 50 elementos deja de cargar elementos:
      if(this.data.length > 50) {
        event.target.complete();
        this.infiniteScroll.disabled = true; //deshabilita el infinite scroll, así no sigue con el cargando una vez pasado el límite
        return;
      }

      const nuevosEl = Array(20)
      this.data.push(... nuevosEl); //a data le pushea los elementos de nuevosEl
      event.target.complete() //sigue cargando cada vez que pasan 20 elementos.
    }, 1000)
  }

}
