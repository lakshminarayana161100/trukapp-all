import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShipperplacebidPageRoutingModule } from './shipperplacebid-routing.module';

import { ShipperplacebidPage } from './shipperplacebid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShipperplacebidPageRoutingModule
  ],
  declarations: [ShipperplacebidPage]
})
export class ShipperplacebidPageModule {}
