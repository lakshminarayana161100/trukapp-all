import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrukallbidsPage } from './trukallbids.page';

const routes: Routes = [
  {
    path: '',
    component: TrukallbidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrukallbidsPageRoutingModule {}
