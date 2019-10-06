import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { SharedService } from "src/app/services/shared.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  title = "About";
  constructor(
    private titleService: Title,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.titleService.setTitle(
      `${this.title} - ${this.sharedService.blogTitle}`
    );
  }
}
