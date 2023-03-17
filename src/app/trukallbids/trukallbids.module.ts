import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrukallbidsPageRoutingModule } from './trukallbids-routing.module';

import { TrukallbidsPage } from './trukallbids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrukallbidsPageRoutingModule
  ],
  declarations: [TrukallbidsPage]
})
export class TrukallbidsPageModule {}
