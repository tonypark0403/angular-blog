import { Injectable } from "@angular/core";
import { Article } from "../models/article";
import { Observable, of } from "rxjs";
import { ARTICLES } from "../models/mock-articles";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor() {}
  getArticles(): Observable<Article[]> {
    const articles: Article[] = ARTICLES;
    return of(articles);
  }
}
