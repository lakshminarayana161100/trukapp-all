import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttachLoadPage } from './attach-load.page';

const routes: Routes = [
  {
    path: '',
    component: AttachLoadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttachLoadPageRoutingModule {}
