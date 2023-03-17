import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TruckviewbidsPageRoutingModule } from './truckviewbids-routing.module';

import { TruckviewbidsPage } from './truckviewbids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TruckviewbidsPageRoutingModule
  ],
  declarations: [TruckviewbidsPage]
})
export class TruckviewbidsPageModule {}
