import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChaptersPageRoutingModule } from './chapters-routing.module';

import { ChaptersPage } from './chapters.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChaptersPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [ChaptersPage]
})
export class ChaptersPageModule {}
