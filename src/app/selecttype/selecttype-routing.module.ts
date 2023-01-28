import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecttypePage } from './selecttype.page';

const routes: Routes = [
  {
    path: '',
    component: SelecttypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecttypePageRoutingModule {}
