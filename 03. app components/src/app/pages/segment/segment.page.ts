import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  //necesito referencia al elemento del html, por eso tengo que crear el viewchild. EN el html uso un #para poder marcarlo
  @ViewChild(IonSegment) segment:IonSegment;

  superHeroes: Observable<any>;
  //para usar el pipe de búsqueda:
  publisher= '';

  constructor(
    //importar servicio creado para levantar los heroes por json. Luego lo tengo que llamar en el ngOnInit:
    private dataService: DataService
  ) { }

  ngOnInit() {
    //le marco qué elemento quiero que aparezca marcado cuando recién abro
    this.segment.value='todos';

    //uso el observable:
    this.superHeroes = this.dataService.getHeroes();

  }

  segmentChanged(event) {
    const valorSegmento = event.detail.value;

    //busqueda: todos no filtra, el resto filtra por el valor que tenga
    if(valorSegmento === 'todos') {
      this.publisher= '';
      return;
    }

    this.publisher = valorSegmento; 

    console.log(valorSegmento)
  }

}
