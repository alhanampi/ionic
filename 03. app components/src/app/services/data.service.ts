import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Componente } from '../interfaces/interfaces'

//importa el delay del rxjs para que el skeleton text tenga tiempo de cargar:
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
    ) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  //para el menu
  getMenuOptions() {
    return this.http.get<Componente[]>('/assets/data/menu.json') //si no hago el <Componente> y lo importo, tira error en el menu.
  }

  //para el searchBar:
  getAlbums() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/albums') //si no hago el <Componente> y lo importo, tira error en el menu.
  }

  //para segment:
  getHeroes(){
    return this.http.get('assets/data/superheroes.json') //necesito demorarlo para probar el skeleton text. Estos pipes son predeterminados del rxjs:
    .pipe( 
      delay(1500) //va a tardar ese tiempo
    )
  }
}
