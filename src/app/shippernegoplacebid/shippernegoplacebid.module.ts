import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShippernegoplacebidPageRoutingModule } from './shippernegoplacebid-routing.module';

import { ShippernegoplacebidPage } from './shippernegoplacebid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShippernegoplacebidPageRoutingModule
  ],
  declarations: [ShippernegoplacebidPage]
})
export class ShippernegoplacebidPageModule {}
