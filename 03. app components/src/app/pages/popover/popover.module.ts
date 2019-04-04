import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopoverPage } from './popover.page';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: PopoverPage
  }
];

@NgModule({
  entryComponents: [
    PopinfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes), 
    ComponentsModule //hay que importar el entry pero tambén el components!
  ],
  declarations: [PopoverPage]
})
export class PopoverPageModule {}
