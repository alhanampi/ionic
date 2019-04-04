import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  
  //hay que importar lo que voy a usar para hacer el ngForce en el html, sino da error, y darle tipo article. Es un array vacío
@Input () noticias: Article[] = []

//para indicar si está en favoritos o no. Empieza en falso porque por defecto asumo que no está en favoritos. Ese mismo código se lleva a noticia.
@Input() enFavoritos  = false;

  constructor() { }

  ngOnInit() {}

}
