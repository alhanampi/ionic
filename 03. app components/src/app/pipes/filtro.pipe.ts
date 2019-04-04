import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string, columna: string): any[] {

    if(texto === '' || texto === undefined) {
      return arreglo; //si no se aplicó filtro, devuelve todo
    }

    texto = texto.toLowerCase();

    return arreglo.filter(item => {
      //debe devolver true or false. Como JS es case sensitive, hay que pasarlo a lowercase
      return item[columna].toLowerCase().includes( texto ); //antes le pasaba .title, ahora paso columna. Eso hace más flexible y reutilizable al código. En el filtro necesito un tercer argumento
    })
        
  }

}
