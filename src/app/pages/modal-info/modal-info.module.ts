import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalInfoPage } from './modal-info.page';

// // hay que sacar todo lo del router porque sino en vez de abrir modal abre esta

// const routes: Routes = [
//   {
//     path: '',
//     component: ModalInfoPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  //  RouterModule.forChild(routes)
  ],
  declarations: [ModalInfoPage]
})
export class ModalInfoPageModule {}
