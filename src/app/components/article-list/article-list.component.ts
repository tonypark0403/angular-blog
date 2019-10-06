import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/model/article";
import { ARTICLES } from "src/app/model/mock-articles";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.scss"]
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  constructor() {}

  ngOnInit() {
    this.articles = ARTICLES;

    console.log(this.articles);
  }
}
