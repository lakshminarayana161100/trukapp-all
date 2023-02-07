import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VrifyaadharotpPage } from './vrifyaadharotp.page';

const routes: Routes = [
  {
    path: '',
    component: VrifyaadharotpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VrifyaadharotpPageRoutingModule {}
