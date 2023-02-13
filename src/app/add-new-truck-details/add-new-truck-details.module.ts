import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { IonicModule } from '@ionic/angular';

import { AddNewTruckDetailsPageRoutingModule } from './add-new-truck-details-routing.module';

import { AddNewTruckDetailsPage } from './add-new-truck-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewTruckDetailsPageRoutingModule,
    NgMultiSelectDropDownModule
  ],
  declarations: [AddNewTruckDetailsPage]
})
export class AddNewTruckDetailsPageModule {}
