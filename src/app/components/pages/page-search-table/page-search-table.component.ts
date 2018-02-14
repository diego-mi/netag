import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-search-table',
  templateUrl: './page-search-table.component.html',
  styleUrls: ['./page-search-table.component.scss']
})
export class PageSearchTableComponent implements OnInit {

  public data: any;

  constructor(private route: ActivatedRoute) {
    this.data = route.snapshot.data;
  }

  ngOnInit() {
  }

}
