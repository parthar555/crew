import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'creaw-app';
  activeLink: string = '/home'
  constructor(public router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((data: any) => {
      if (data.url) this.activeLink = data.url;
    });
  }
}
