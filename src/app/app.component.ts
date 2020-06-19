import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pwa-news';

  newsArticles: any;

  constructor(private dataService: DataService){}

  ngOnInit() {
    this.dataService.getNews().subscribe(
      (res: any) => {
          this.newsArticles = res.articles;
      }
    )
  }
}
