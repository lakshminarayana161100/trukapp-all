import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTruckPage } from './add-truck.page';

const routes: Routes = [
  {
    path: '',
    component: AddTruckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTruckPageRoutingModule {}
