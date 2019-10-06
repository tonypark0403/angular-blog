import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article";
import { ARTICLES } from "src/app/models/mock-articles";
import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.scss"]
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.getArticles();

    console.log(this.articles);
  }

  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe(articles => (this.articles = articles));
  }
}
