import { TestBed } from '@angular/core/testing';

import { MyRecipesService } from './my-recipes.service';

describe('MyRecipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyRecipesService = TestBed.get(MyRecipesService);
    expect(service).toBeTruthy();
  });
});
