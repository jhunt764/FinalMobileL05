import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Section6PageRoutingModule } from './section6-routing.module';

import { Section6Page } from './section6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Section6PageRoutingModule
  ],
  declarations: [Section6Page]
})
export class Section6PageModule {}
