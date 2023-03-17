import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TruckviewbidsPage } from './truckviewbids.page';

const routes: Routes = [
  {
    path: '',
    component: TruckviewbidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TruckviewbidsPageRoutingModule {}
