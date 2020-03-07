import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sec3PageRoutingModule } from './sec3-routing.module';

import { Sec3Page } from './sec3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sec3PageRoutingModule
  ],
  declarations: [Sec3Page]
})
export class Sec3PageModule {}
