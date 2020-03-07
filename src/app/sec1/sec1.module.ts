import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sec1PageRoutingModule } from './sec1-routing.module';

import { Sec1Page } from './sec1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sec1PageRoutingModule
  ],
  declarations: [Sec1Page]
})
export class Sec1PageModule {}
