import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article";
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  article: Article = new Article();
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const { key } = params;
      this.articleService.getArticle(key).subscribe(article => {
        if (article === undefined) {
          this.router.navigateByUrl("404");
          return;
        }
        this.article = article;
        console.log(article);
      });
    });
  }
}
