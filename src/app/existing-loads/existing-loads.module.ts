import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExistingLoadsPageRoutingModule } from './existing-loads-routing.module';

import { ExistingLoadsPage } from './existing-loads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExistingLoadsPageRoutingModule
  ],
  declarations: [ExistingLoadsPage]
})
export class ExistingLoadsPageModule {}
