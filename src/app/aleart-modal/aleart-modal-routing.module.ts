import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AleartModalPage } from './aleart-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AleartModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AleartModalPageRoutingModule {}
