import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleListComponent } from "./components/article-list/article-list.component";
import { AboutComponent } from "./components/about/about.component";
import { ArticleComponent } from "./components/article/article.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: "articles", component: ArticleListComponent },
  { path: "about", component: AboutComponent },
  { path: "404", component: NotFoundComponent },
  { path: "", component: ArticleListComponent },
  { path: ":key", component: ArticleComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
