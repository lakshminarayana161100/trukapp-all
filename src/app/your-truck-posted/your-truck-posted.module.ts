import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourTruckPostedPageRoutingModule } from './your-truck-posted-routing.module';

import { YourTruckPostedPage } from './your-truck-posted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourTruckPostedPageRoutingModule
  ],
  declarations: [YourTruckPostedPage]
})
export class YourTruckPostedPageModule {}
