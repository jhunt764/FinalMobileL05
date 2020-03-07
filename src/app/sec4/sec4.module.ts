import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sec4PageRoutingModule } from './sec4-routing.module';

import { Sec4Page } from './sec4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sec4PageRoutingModule
  ],
  declarations: [Sec4Page]
})
export class Sec4PageModule {}
