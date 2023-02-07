import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditalldetailsPage } from './editalldetails.page';

const routes: Routes = [
  {
    path: '',
    component: EditalldetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditalldetailsPageRoutingModule {}
