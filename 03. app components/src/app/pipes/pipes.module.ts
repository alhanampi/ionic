import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';


//todo lo que se cree en pipes va a tener que ser importado en declarations y luego exportado. Hay que declararlo en app.module también
@NgModule({
  declarations: [FiltroPipe],
  exports: [FiltroPipe],
  })
export class PipesModule { }
