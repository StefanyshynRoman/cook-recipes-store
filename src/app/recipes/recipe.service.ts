import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
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

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
