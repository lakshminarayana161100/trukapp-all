import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakepaymentPage } from './makepayment.page';

const routes: Routes = [
  {
    path: '',
    component: MakepaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakepaymentPageRoutingModule {}
