import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('A rest Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Meat-Duck',
      ' Meat, Duck Free for use',
      'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg',
      [
        new Ingredient('Duck', 1),
        new Ingredient('Orange', 6)
      ]),
    new Recipe("Cake",
      "Piece of cake",
      'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_1280.jpg',
      [
        new Ingredient('Dust', 1),
        new Ingredient('Cherry', 10),
        new Ingredient('Milk', 2)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
