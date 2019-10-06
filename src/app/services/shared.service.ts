import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SharedService {
  blogTitle = "My Dev Story";
  baseUrl = "http:/localhost:4200";
  constructor() {}
}
