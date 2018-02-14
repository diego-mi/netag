import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public data: any;

  constructor(private route: ActivatedRoute) {
    this.data = route.snapshot.data;
  }

  ngOnInit() {
  }

}
