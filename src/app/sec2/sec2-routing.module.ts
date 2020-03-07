import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sec2Page } from './sec2.page';

const routes: Routes = [
  {
    path: '',
    component: Sec2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sec2PageRoutingModule {}
