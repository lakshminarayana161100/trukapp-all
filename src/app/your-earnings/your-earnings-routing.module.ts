import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourEarningsPage } from './your-earnings.page';

const routes: Routes = [
  {
    path: '',
    component: YourEarningsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourEarningsPageRoutingModule {}
