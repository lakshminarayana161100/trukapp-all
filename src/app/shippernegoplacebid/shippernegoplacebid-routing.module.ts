import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShippernegoplacebidPage } from './shippernegoplacebid.page';

const routes: Routes = [
  {
    path: '',
    component: ShippernegoplacebidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippernegoplacebidPageRoutingModule {}
