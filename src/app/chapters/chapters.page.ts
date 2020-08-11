import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
    private httpClient: HttpClient,
    ) { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.route.params.subscribe(async (data) => {
      this.title = data.manga;
      this.httpClient.get(`https://dotben-mangareader-api.herokuapp.com/manga/${this.title}`)
        .subscribe((chapters: any) => {
          this.chapters = chapters;
        });
    });
  }

  navigateToViewer(chapter: number) {
    this.router.navigate([`/tabs/manga/${this.title}/chapter/${chapter}`]);
  }

}
