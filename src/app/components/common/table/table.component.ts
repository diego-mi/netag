import {Component, OnInit} from '@angular/core';
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

  getFirstColumTextClass(tbodyItem, index) {
    let firstColumnClassName = '';

    if (index === 0 && tbodyItem.hasBtnAction === true) {
      firstColumnClassName = 'td-first td-first--text-' + tbodyItem.textActionClass;
    }

    return firstColumnClassName;
  }

  getFirstColumBtnClass(tbodyItem, index) {
    let firstColumnClassName = '';

    if (index === 0 && tbodyItem.hasBtnAction === true) {
      firstColumnClassName = tbodyItem.btnActionClass;
    }

    return firstColumnClassName;
  }

}
