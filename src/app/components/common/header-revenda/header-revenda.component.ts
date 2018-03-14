import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-revenda',
  templateUrl: './header-revenda.component.html',
  styleUrls: ['./header-revenda.component.scss']
})
export class HeaderRevendaComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }
}
