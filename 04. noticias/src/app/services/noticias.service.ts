import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment.prod';

//estas dos variables son para achicar el http de las noticias
  const apiKey = environment.apiKey;
  const apiURL = environment.apiURL;

  //apikey puede mandarse por el header en vez de por la app:
  const headers = new HttpHeaders({
    'X-Api-key': apiKey
  })

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  //para controlar en qué paǵina está de noticias. Es 0 porque se quiere incrementar a 1 cuando se entre por primera vez :
  headlinesPage = 0

  //para cuando cambio de categoría volver a donde estaba. Es tipo string:
  categoriaActual ='';
  categoriaPage = 0;

  constructor(
    private http: HttpClient
  ) { }

  //es un generico, y hay que especificarle tipo. Esa T es de tipo, y signific a que si recibe un tipo, la respuesta va a ser del mismo tipo 
  private ejecutarQuery<T>(query:string) {
    query = apiURL + query;
    
    return this.http.get<T>(query, {headers})
  }
  
  getTopHeadlines() {

    //con esto incremento de 0 a 1 la página en que se está. Después le puedo agregar eso como parámetro después de country:
    this.headlinesPage ++
  //respuestaTopHeadlines es el tipo que es
    return this.ejecutarQuery<RespuestaTopHeadlines>(`top-headlines?country=ar&page=${this.headlinesPage}`) 
    
    //con esto reduzco codigo
  //  return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=a14031906ca0477e89eceb35af8f4645`)
}

// respuesta http original: https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=a14031906ca0477e89eceb35af8f4645`
//traigo el tipo de dato acá al get en vez de ponerlo en el tab, así queda centralizado y ya está cuando hace el pedido

getTopHearlinesCat(categoria: string) {
//primero comprobar si estoy clickeando la que yo ya estoy. Si lo es, es porque quiere la siguiente página:
  if(this.categoriaActual === categoria) {
    this.categoriaPage++;
  } else {
    this.categoriaPage = 1; //sino, ir a la 1 de la nueva
    this.categoriaActual = categoria
  }

  return this.ejecutarQuery<RespuestaTopHeadlines>(`top-headlines?country=ar&category=${ categoria }&page=${this.categoriaPage}`) 
//  return this.http.get(`https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=a14031906ca0477e89eceb35af8f4645`)
}
}
