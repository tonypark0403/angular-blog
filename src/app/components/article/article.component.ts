import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { Article } from "src/app/models/article";
import { ArticleService } from "src/app/services/article.service";
import { SharedService } from "src/app/services/shared.service";

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
    private router: Router,
    private titleService: Title,
    private sharedService: SharedService
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
        // console.log(article);
        this.titleService.setTitle(
          `${this.article.title} - ${this.sharedService.blogTitle}`
        );
      });
    });
  }
}
