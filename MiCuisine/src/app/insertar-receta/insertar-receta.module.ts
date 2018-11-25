import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InsertarRecetaPage } from './insertar-receta.page';

const routes: Routes = [
  {
    path: '',
    component: InsertarRecetaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InsertarRecetaPage]
})
export class InsertarRecetaPageModule {}
