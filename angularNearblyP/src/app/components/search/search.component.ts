import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from 'src/app/models/place';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private searchService: SearchService) { }
  place: string;
  places: Place[] = [];
  ngOnInit(): void {
  }
  search() {
    debugger;
    this.searchService.search(this.place).subscribe(res => {
      console.log(res);
      this.places = res;
    }, err => {
      console.log(err);
    })
    debugger;
    // this.router.navigate(["/results"]);
  }
}
