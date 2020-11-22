import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from 'src/app/models/place';
import { SearchService } from 'src/app/services/search.service';

import { map } from 'rxjs/operators';
import { observable } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private searchService: SearchService) { }
  place: string;
  i: number = 0;
  places: Place[] = [];
  ngOnInit(): void {
  }

  search() {
    debugger;
    this.searchService.search(this.place).pipe(
      map(res => {
        res = res.results;
        return res.map(item => ({ search_string: this.place, name_place: item.name, address_place: item.formatted_address }))
      })

    ).subscribe(res => {
      this.searchService.change(res.slice(0, 5));
      console.log(res);
    })

  }

  // this.router.navigate(["/results"]);
}

