import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from 'src/app/models/place';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, AfterViewInit {
  nearblyPlaces: Place[];
  constructor(private cdRef: ChangeDetectorRef, private router: Router, private searchService: SearchService) { }
  ngAfterViewInit(): void {
    this.nearblyPlaces = this.searchService.get();
    this.cdRef.detectChanges();
    debugger;
  }

  ngOnInit(): void {
  }
  close() {
    this.router.navigate(["search"]);
  }

}
