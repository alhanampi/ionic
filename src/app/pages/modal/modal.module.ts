import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalPage } from './modal.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { ModalInfoPageModule } from '../modal-info/modal-info.module';

const routes: Routes = [
  {
    path: '',
    component: ModalPage
  }
];

@NgModule({
  entryComponents: [
    ModalInfoPage
  ], //si no lo agrego va a dar error 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    ModalInfoPageModule //idem, si no agrego esto va a dar error. Solo con agregar esto iría a modal-info en vez de a modal, entonces hay que modificar ahí
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
