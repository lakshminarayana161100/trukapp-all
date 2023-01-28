import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecttypePageRoutingModule } from './selecttype-routing.module';

import { SelecttypePage } from './selecttype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecttypePageRoutingModule
  ],
  declarations: [SelecttypePage]
})
export class SelecttypePageModule {}
