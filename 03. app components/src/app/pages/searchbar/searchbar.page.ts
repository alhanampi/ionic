import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  //traigo un json con albumes de prueba para usar para el ejercicio:
  albumes: any[] = []; 
  textoBuscar: '' //para hacer la busqueda

  constructor(
    private dataService: DataService //traigo de data.service.ts

  ) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe( albumes => {
      console.log(albumes)
      this.albumes = albumes;
    })
  }


  buscar ( event ) {
   // console.log(event)
   this.textoBuscar = event.detail.value; //texto buscar es el argumento para el pipe
  }
}
