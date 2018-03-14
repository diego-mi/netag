import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-produtor',
  templateUrl: './header-produtor.component.html',
  styleUrls: ['./header-produtor.component.scss']
})
export class HeaderProdutorComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }
}
