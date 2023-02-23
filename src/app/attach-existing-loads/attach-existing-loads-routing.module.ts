import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttachExistingLoadsPage } from './attach-existing-loads.page';

const routes: Routes = [
  {
    path: '',
    component: AttachExistingLoadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttachExistingLoadsPageRoutingModule {}
