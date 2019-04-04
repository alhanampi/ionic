import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasComponent } from './noticias/noticias.component';

//hay que importar el ionicModule y los módulos de noticias. Hay que exportar el noticias porque lo tengo que importar en las otras páginas. El noticia depende de noticias así que no hay necesidad de exportarlo 

@NgModule({
  declarations: [
    NoticiaComponent,
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    NoticiasComponent
  ]
})
export class ComponentsModule { }
