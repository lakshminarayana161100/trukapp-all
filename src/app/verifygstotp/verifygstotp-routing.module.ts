import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifygstotpPage } from './verifygstotp.page';

const routes: Routes = [
  {
    path: '',
    component: VerifygstotpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifygstotpPageRoutingModule {}
