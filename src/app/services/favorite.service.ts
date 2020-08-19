import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {

  public favorites: Subject<any[]> = new Subject();

  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService,
  ) { }

  getFavorites(): void {
    this.httpClient.get(`${this.apiService.getApiUrl()}favorites`)
      .subscribe((data: any[]) => {
        this.favorites.next(data);
      });
  }

  updateCursor(cursor: number, favId: string): void {
    console.log('favId', favId);
    this.httpClient.put(`${this.apiService.getApiUrl()}favorites/${favId}`, { cursor })
      .subscribe((data) => { console.log(`PUT favorite/${favId}`, data); });
  }
}
