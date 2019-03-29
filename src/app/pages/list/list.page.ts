import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList} from '@ionic/angular';

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
    private dataService: DataService //se importa automáticamente ese servicio

  ) { }

  //la información de data service la traigo a ngOnInit
  ngOnInit() {
    this.usuarios = this.dataService.getUsers() //usuarios va a ser igual a lo que el dataService retorna
    
  }

  favorite (user){
    console.log('favorite', user);
    this.lista.closeSlidingItems(); //con esto se cierra al hacer click.
  }

  share (user){
    console.log('share', user);
    this.lista.closeSlidingItems()
  }

  delete (user){
    console.log('delete', user);
    this.lista.closeSlidingItems()
  }

  unread (user){
    console.log('unread', user);
    this.lista.closeSlidingItems()
  }


}
