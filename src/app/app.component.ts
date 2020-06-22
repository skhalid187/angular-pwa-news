import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'angular-pwa-news';

  public newsArticles: any;

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.dataService.getNews().subscribe(
      (res: any) => {
        this.newsArticles = res.articles;
      }
    );
  }
}
