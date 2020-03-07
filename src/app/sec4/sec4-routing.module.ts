import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sec4Page } from './sec4.page';

const routes: Routes = [
  {
    path: '',
    component: Sec4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sec4PageRoutingModule {}
