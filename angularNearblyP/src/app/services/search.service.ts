import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Place } from '../models/place';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  placesNearbly: Place[];
  constructor(private http: HttpClient, private router: Router) { }
  // search(place: string): Observable<Place[]> {
  search(place: string): Observable<any> {
    debugger
    // return this.http.get<Place[]>(environment.myUrl + "search/all");
    // return this.http.get<Place[]>("http://localhost:3000/search/all");
    return this.http.get<any>("http://localhost:3000/search/" + place);
  }
  change(newPlaces: Place[]) {
    this.placesNearbly = newPlaces;
    this.router.navigate(['results']);
  }
  get() {
    return this.placesNearbly;
  }
}

