import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactFaqPage } from './contact-faq.page';

const routes: Routes = [
  {
    path: '',
    component: ContactFaqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactFaqPageRoutingModule {}
