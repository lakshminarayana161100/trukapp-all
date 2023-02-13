import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourTruckPostedPage } from './your-truck-posted.page';

const routes: Routes = [
  {
    path: '',
    component: YourTruckPostedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourTruckPostedPageRoutingModule {}
