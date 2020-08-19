import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getApiUrl(): string {
    return 'https://dotben-mangareader-api.herokuapp.com/';
    // return 'http://localhost:3000/';
  }
}
