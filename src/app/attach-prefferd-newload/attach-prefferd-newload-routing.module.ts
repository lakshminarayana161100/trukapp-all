import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttachPrefferdNewloadPage } from './attach-prefferd-newload.page';

const routes: Routes = [
  {
    path: '',
    component: AttachPrefferdNewloadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttachPrefferdNewloadPageRoutingModule {}
