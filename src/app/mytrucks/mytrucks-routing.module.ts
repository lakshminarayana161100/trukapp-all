import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MytrucksPage } from './mytrucks.page';

const routes: Routes = [
  {
    path: '',
    component: MytrucksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MytrucksPageRoutingModule {}
