import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonorcompanydetailsPage } from './personorcompanydetails.page';

const routes: Routes = [
  {
    path: '',
    component: PersonorcompanydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonorcompanydetailsPageRoutingModule {}
