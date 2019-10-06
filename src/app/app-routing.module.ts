import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleListComponent } from "./components/article-list/article-list.component";
import { AboutComponent } from "./components/about/about.component";
import { ArticleComponent } from "./components/article/article.component";

const routes: Routes = [
  { path: "articles", component: ArticleListComponent },
  { path: "about", component: AboutComponent },
  { path: "", component: ArticleListComponent },
  { path: ":key", component: ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
