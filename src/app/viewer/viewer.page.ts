import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.route.params.subscribe(async (params) => {
      this.manga = params.manga;
      this.chapter = params.chapter;
      this.httpClient.get(`https://dotben-mangareader-api.herokuapp.com/manga/${params.manga}/${params.chapter}`)
        .subscribe((chapter: any) => {
          this.pages = chapter.pages;
        });
    });
  }

}
