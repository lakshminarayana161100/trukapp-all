import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AleartModalPageRoutingModule } from './aleart-modal-routing.module';

import { AleartModalPage } from './aleart-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AleartModalPageRoutingModule
  ],
  declarations: [AleartModalPage]
})
export class AleartModalPageModule {}
