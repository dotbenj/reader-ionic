import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

import { ViewerPage } from './viewer.page';
import { ViewerPageRoutingModule } from './viewer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewerPageRoutingModule,
    NgxIonicImageViewerModule,
    HttpClientModule,
  ],
  declarations: [ViewerPage]
})
export class ViewerPageModule {}
