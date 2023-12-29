import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit{
  recipes:Recipe[]=[
    new Recipe('A rest Recipe','This is simply a test','https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg'),
    new Recipe('Meat-Duck',' Meat, Dack Free for use','https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg'),
    new Recipe("Cake","Piece of cake",'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_1280.jpg')
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
