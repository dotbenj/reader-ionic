import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as axios from 'axios';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.page.html',
  styleUrls: ['./chapters.page.scss'],
})
export class ChaptersPage implements OnInit {

  public title: string;
  public chapters: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.route.params.subscribe(async (data) => {
      this.title = data.manga;
      const chaptersFetch = await axios.default.get(`https://dotben-mangareader-api.herokuapp.com/manga/${this.title}`);
      this.chapters = chaptersFetch.data.reverse();
    });
  }

  navigateToViewer(chapter: number) {
    this.router.navigate([`/tabs/manga/${this.title}/chapter/${chapter}`]);
  }

}
