import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as axios from 'axios';

import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.page.html',
  styleUrls: ['./viewer.page.scss'],
})
export class ViewerPage implements OnInit {

  public chapter: number;
  public pages: string[];
  public manga: string;
  public modal: any;
  public image1: string;

  constructor(
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.route.params.subscribe(async (params) => {
      this.manga = params.manga;
      this.chapter = params.chapter;
      const chapter = await axios.default.get(`https://dotben-mangareader-api.herokuapp.com/manga/${params.manga}/${params.chapter}`);
      this.pages = chapter.data.pages;
    });
  }

}
