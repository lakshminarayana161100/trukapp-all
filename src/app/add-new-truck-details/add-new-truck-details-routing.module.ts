import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewTruckDetailsPage } from './add-new-truck-details.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewTruckDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewTruckDetailsPageRoutingModule {}
