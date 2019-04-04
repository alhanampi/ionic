import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [] //es un array y se declara vacío

  constructor(
    private noticiasService: NoticiasService
  ) {}

ngOnInit() {
  this.cargarNoticias()

//codigo original, como se repetía se pasó a cargarNoticias
  // this.noticiasService.getTopHeadlines()
  //  .subscribe( resp => { // podría hacer resp: RespuestaTopHeadline, pero conviene centralizarlo en el servicio
  //   console.log('noticias', resp)
  //   this.noticias.push (...resp.articles); //para que al iniciar se los ponga en el array de article. Es con push para que las noticias nuevas se adicionen y no se pide. Si fuera this.noticias = resp.articles se pisaría. Uso el ... (spread) para extraer e insertar los elementos de manera independiente
  // }) 
}

loadData(event) {
  this.cargarNoticias(); //el infiniteScroll tiene que cancelar cuando ya se tienen las noticias.
}

cargarNoticias(event?) {
  this.noticiasService.getTopHeadlines()
  .subscribe( resp => { 
   console.log('noticias', resp)

   //si ya no hay artículos para mostrar:
   if(resp.articles.length === 0) {
     event.target.disabled = true;
     event.target.complete();
     return;
   }
   this.noticias.push (...resp.articles); 

   if(event) {
     event.target.complete();
   }
})
}
}

