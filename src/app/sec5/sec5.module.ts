import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sec5PageRoutingModule } from './sec5-routing.module';

import { Sec5Page } from './sec5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sec5PageRoutingModule
  ],
  declarations: [Sec5Page]
})
export class Sec5PageModule {}
