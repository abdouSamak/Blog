import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monBlog';
  mail2 = 'abdou.samake0908@gmail.com';
  route = true;
  constructor(private router: Router) {}

  jumptop(): void {
    this.router.navigate(['/accueil']);
    this.route = true;
  }
}
