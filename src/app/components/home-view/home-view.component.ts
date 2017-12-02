import { Component, OnInit } from '@angular/core';
import { SearchQuery } from '../../common/search-query';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  handleSearchQuery(query: SearchQuery) {
    this.router.navigate(['/products'], { queryParams: query});
  }
}
