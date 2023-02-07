import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifygstotpPageRoutingModule } from './verifygstotp-routing.module';
import {NgOtpInputModule} from 'ng-otp-input';
import { VerifygstotpPage } from './verifygstotp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifygstotpPageRoutingModule,
    NgOtpInputModule
  ],
  declarations: [VerifygstotpPage]
})
export class VerifygstotpPageModule {}
