import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditalldetailsPageRoutingModule } from './editalldetails-routing.module';

import { EditalldetailsPage } from './editalldetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditalldetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditalldetailsPage]
})
export class EditalldetailsPageModule {}
