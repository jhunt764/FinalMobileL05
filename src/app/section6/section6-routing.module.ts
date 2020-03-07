import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Section6Page } from './section6.page';

const routes: Routes = [
  {
    path: '',
    component: Section6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Section6PageRoutingModule {}
