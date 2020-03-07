import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sec3Page } from './sec3.page';

const routes: Routes = [
  {
    path: '',
    component: Sec3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sec3PageRoutingModule {}
