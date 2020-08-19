import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public favorites: any = [];

  constructor(
    private router: Router,
    private favService: FavoriteService,
  ) {}

  ionViewWillEnter() {
    this.favService.favorites.subscribe((data) => {
      this.favorites = data;
    });
    this.favService.getFavorites();
  }

  navigate(url: string) {
    this.router.navigate([`tabs/manga/${url}`]);
  }

}
