import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  newsApiKey = 'News api key goes here';

  newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';

  constructor(private httpClient: HttpClient) { }

  getNews() {
    const finalnewsApilUrl = this.newsApiUrl + this.newsApiKey;
    return this.httpClient.get(finalnewsApilUrl);
  }
}
