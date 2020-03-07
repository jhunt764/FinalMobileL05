import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TOCPageRoutingModule } from './toc-routing.module';

import { TOCPage } from './toc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TOCPageRoutingModule
  ],
  declarations: [TOCPage]
})
export class TOCPageModule {}
