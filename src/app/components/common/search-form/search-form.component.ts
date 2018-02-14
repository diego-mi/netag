import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  public data: any;

  constructor(private route: ActivatedRoute) {
    this.data = route.snapshot.data;
  }

  ngOnInit() {
  }

}
