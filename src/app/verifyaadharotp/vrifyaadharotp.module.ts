import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VrifyaadharotpPageRoutingModule } from './vrifyaadharotp-routing.module';
import {NgOtpInputModule} from 'ng-otp-input';
import { VrifyaadharotpPage } from './vrifyaadharotp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VrifyaadharotpPageRoutingModule,
    NgOtpInputModule
  ],
  declarations: [VrifyaadharotpPage]
})
export class VrifyaadharotpPageModule {}
