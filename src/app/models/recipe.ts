export class Recipe {
    // uri: string;
    id: number;
    title: string;
    imageUrl: string;
    // source: string;
    // sourceUrl: string;
    // ingredients: Array<string>;
    prepTime: number;
    cookTime: number;
    yield: number;
    // dietLabels: [string];
    // healthLabels: [string];
    // cautions: [string];

    constructor(recipe: object) {
        Object.assign(this, recipe);
    }
}

