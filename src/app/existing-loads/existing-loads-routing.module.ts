import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExistingLoadsPage } from './existing-loads.page';

const routes: Routes = [
  {
    path: '',
    component: ExistingLoadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExistingLoadsPageRoutingModule {}
