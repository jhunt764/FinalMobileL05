import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sec5Page } from './sec5.page';

const routes: Routes = [
  {
    path: '',
    component: Sec5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sec5PageRoutingModule {}
