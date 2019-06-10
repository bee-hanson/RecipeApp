import { Injectable } from '@angular/core';
import { Observable, Observer, Subject, BehaviorSubject } from 'rxjs';
import { Recipe } from '../models/recipe';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyRecipesService {

  private url = '../../assets/recipes.json';
  
  private getRecipesObserver: Observer<any>;
  private getRecipesSource = new BehaviorSubject<Recipe[]>([]);
  public getRecipesChanged$ = this.getRecipesSource.asObservable();

  constructor(private http: HttpClient) {
     // this.getRecipesChanged$ = new Observable((observer: any) => this.getRecipesObserver = observer).pipe(share());
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url);
  }

  getRecipesSubscription() {
    this.http.get<Recipe[]>(this.url).subscribe(data => {
      if (data && this.getRecipesObserver) {
        this.getRecipesObserver.next(data);
      }
    });
  }

  getRecipesSubject() {
    this.http.get<Recipe[]>(this.url).subscribe(data => {
      if (data && this.getRecipesSource) {
        this.getRecipesSource.next(data);
      }
    });
  }

  addRecipe(): void {

  }

  editRecipe() {

  }
}
