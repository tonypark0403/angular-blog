import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Article } from "src/app/models/article";
import { ArticleService } from "src/app/services/article.service";
import { SharedService } from "src/app/services/shared.service";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.scss"]
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  constructor(
    private articleService: ArticleService,
    private titleService: Title,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.sharedService.blogTitle}`);
    this.getArticles();
    // console.log(this.articles);
  }

  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe(articles => (this.articles = articles));
  }
}
