import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrukEditPagePageRoutingModule } from './truk-edit-page-routing.module';

import { TrukEditPagePage } from './truk-edit-page.page';


import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrukEditPagePageRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [TrukEditPagePage]
})
export class TrukEditPagePageModule {}
