import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sec1Page } from './sec1.page';

const routes: Routes = [
  {
    path: '',
    component: Sec1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sec1PageRoutingModule {}
