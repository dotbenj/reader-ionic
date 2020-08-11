import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as axios from 'axios';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public query: string;
  public results: any;

  constructor(private router: Router) {}

  async search() {
    console.log('Query is:', this.query);
    try {
      const result = await axios.default.get(`https://dotben-mangareader-api.herokuapp.com/manga/search/${this.query}`);
      this.results = result.data;
      console.log('result', this.results);
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  navigate(url: string) {
    this.router.navigate([`tabs/manga/${url}`]);
  }
}
