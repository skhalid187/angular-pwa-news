import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private newsApiKey = 'News api key goes here';

  private newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';

  constructor(private httpClient: HttpClient) { }

  public getNews(): any {
    const finalnewsApilUrl = this.newsApiUrl + this.newsApiKey;
    return this.httpClient.get(finalnewsApilUrl);
  }
}
