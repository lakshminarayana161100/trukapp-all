import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonorcompanydetailsPageRoutingModule } from './personorcompanydetails-routing.module';

import { PersonorcompanydetailsPage } from './personorcompanydetails.page';
import { PersonaldetailsComponent } from '../personaldetails/personaldetails.component';
import { CompanydetailsComponent } from '../companydetails/companydetails.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonorcompanydetailsPageRoutingModule,

  ],
  declarations: [PersonorcompanydetailsPage,PersonaldetailsComponent,CompanydetailsComponent]
})
export class PersonorcompanydetailsPageModule {}
