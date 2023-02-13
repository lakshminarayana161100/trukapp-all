import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrukEditPagePage } from './truk-edit-page.page';

const routes: Routes = [
  {
    path: '',
    component: TrukEditPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrukEditPagePageRoutingModule {}
