import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { articles } from './mock.data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private newsApiKey = 'News api key goes here ..';

  private newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';

  constructor(private httpClient: HttpClient) { }

  public getNews(): any {

    if (this.newsApiKey != 'News api key goes here ..') {
      const finalnewsApilUrl = this.newsApiUrl + this.newsApiKey;
      return this.httpClient.get(finalnewsApilUrl);
    }

    return of({articles});
  }
}
