import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public query: string;
  public results: any;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) {}

  async search() {
    console.log('Query is:', this.query);
    this.httpClient.get(`https://dotben-mangareader-api.herokuapp.com/manga/search/${this.query}`)
      .subscribe(data => {
        this.results = data;
      });
  }

  navigate(url: string) {
    this.router.navigate([`tabs/manga/${url}`]);
  }
}
