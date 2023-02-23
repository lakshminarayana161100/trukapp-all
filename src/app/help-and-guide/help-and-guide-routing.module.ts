import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpAndGuidePage } from './help-and-guide.page';

const routes: Routes = [
  {
    path: '',
    component: HelpAndGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpAndGuidePageRoutingModule {}
