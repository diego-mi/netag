import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-industria',
  templateUrl: './header-industria.component.html',
  styleUrls: ['./header-industria.component.scss']
})
export class HeaderIndustriaComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }
}
