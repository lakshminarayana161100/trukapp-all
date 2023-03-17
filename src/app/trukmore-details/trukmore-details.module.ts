import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrukmoreDetailsPageRoutingModule } from './trukmore-details-routing.module';

import { TrukmoreDetailsPage } from './trukmore-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrukmoreDetailsPageRoutingModule
  ],
  declarations: [TrukmoreDetailsPage]
})
export class TrukmoreDetailsPageModule {}
