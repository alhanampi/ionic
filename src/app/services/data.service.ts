import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Componente } from '../interfaces/interfaces'

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
}
