import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourEarningsPageRoutingModule } from './your-earnings-routing.module';

import { YourEarningsPage } from './your-earnings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourEarningsPageRoutingModule
  ],
  declarations: [YourEarningsPage]
})
export class YourEarningsPageModule {}
