import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrukmoreDetailsPage } from './trukmore-details.page';

const routes: Routes = [
  {
    path: '',
    component: TrukmoreDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrukmoreDetailsPageRoutingModule {}
