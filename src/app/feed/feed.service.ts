import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  url = '';

  public search(searchTerm: string): Observable<Recipe[]> {
      return this.http.get<Recipe[]>(this.url);
  }

  public get(uri: string): Observable<Recipe> {
      return this.http.get<Recipe>(this.url + 'r=' + uri);
  }
}
