import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sec2PageRoutingModule } from './sec2-routing.module';

import { Sec2Page } from './sec2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sec2PageRoutingModule
  ],
  declarations: [Sec2Page]
})
export class Sec2PageModule {}
