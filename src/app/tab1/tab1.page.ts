import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { FavoriteService } from '../services/favorite.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public query: string;
  public results: any;
  private favorites; any;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private apiService: ApiService,
    private favService: FavoriteService,
  ) {}

  ionViewWillEnter() {
    this.favService.favorites.subscribe((favs) => {
      this.favorites = favs;
    });
    this.favService.getFavorites();
  }

  async search() {
    if (this.query && this.query !== '') {
      this.httpClient.get(`${this.apiService.getApiUrl()}manga/search/${this.query}`)
        .subscribe((data: any[]) => {
          this.results = data.map((manga) => {
            return {
              ...manga,
              isFav: this.favorites.filter(fav => fav.name === manga.title).length > 0
            };
          });
        });
    } else {
      this.clearResults();
    }
  }

  navigate(url: string) {
    this.router.navigate([`tabs/manga/${url}`]);
  }

  doFavorite(manga) {
    if (!manga.favorite) {
      manga.isFav = true;
      this.httpClient.post(`${this.apiService.getApiUrl()}favorites`, { 
        name: manga.title,
        url: manga.url,
        img: manga.img,
        author: manga.author,
      })
        .subscribe(data => {
          this.favService.getFavorites();
        }, () => {
          manga.isFav = false;
        });
    }
  }

  clearResults() {
    console.log('clearResults', this.results, this.query);
    this.results = null;
    this.query = null;
  }
}
