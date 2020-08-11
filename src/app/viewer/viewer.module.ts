import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewerPageRoutingModule } from './viewer-routing.module';

import { ViewerPage } from './viewer.page';

import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewerPageRoutingModule,
    NgxIonicImageViewerModule,
  ],
  declarations: [ViewerPage]
})
export class ViewerPageModule {}
