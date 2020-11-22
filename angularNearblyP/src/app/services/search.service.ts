import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Place } from '../models/place';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(place: string): Observable<Place[]> {
    debugger
    // return this.http.get<Place[]>(environment.myUrl + "search/all");
    // return this.http.get<Place[]>("http://localhost:3000/search/all");
    return this.http.get<Place[]>("http://localhost:3000/search/" + place);
  }
}

