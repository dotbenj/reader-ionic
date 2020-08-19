import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { FavoriteService } from '../services/favorite.service';
import { ThrowStmt } from '@angular/compiler';
import { AngularDelegate } from '@ionic/angular';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.page.html',
  styleUrls: ['./chapters.page.scss'],
})
export class ChaptersPage implements OnInit {

  public title: string;
  public chapters: any[];
  private favorites: any[];
  private currentFav: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private apiService: ApiService,
    private favService: FavoriteService,
    ) { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.favService.favorites.subscribe((favs) => {
      this.favorites = favs;
      this.route.params.subscribe(async (data) => {
        this.title = data.manga;
        this.httpClient.get(`${this.apiService.getApiUrl()}manga/${this.title}`)
          .subscribe((chapters: any) => {
            this.currentFav = this.favorites.filter((fav) => fav.url.substr(1) === data.manga)[0];
            if (!this.currentFav) {
              this.chapters = chapters;
            } else {
              this.chapters = chapters.map((chap) => {
                return {
                  ...chap,
                  read: chap.number < this.currentFav.cursor,
                };
              });
            }
          });
      });
    });
    this.favService.getFavorites();
  }

  navigateToViewer(chapter: number) {
    if (this.currentFav) {
      this.favService.updateCursor(chapter, this.currentFav._id);
    }
    this.router.navigate([`/tabs/manga/${this.title}/chapter/${chapter}`]);
  }

}
