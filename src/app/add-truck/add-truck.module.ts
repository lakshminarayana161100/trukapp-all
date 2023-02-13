import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IonicModule } from '@ionic/angular';

import { AddTruckPageRoutingModule } from './add-truck-routing.module';

import { AddTruckPage } from './add-truck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTruckPageRoutingModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [AddTruckPage]
})
export class AddTruckPageModule {}
