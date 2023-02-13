import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttachLoadPageRoutingModule } from './attach-load-routing.module';

import { AttachLoadPage } from './attach-load.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttachLoadPageRoutingModule
  ],
  declarations: [AttachLoadPage]
})
export class AttachLoadPageModule {}
