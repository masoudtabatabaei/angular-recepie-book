import { Component, OnInit } from '@angular/core';
import {IngredientsModel} from "../shared/ingredients.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:IngredientsModel[] = [
    new IngredientsModel("Salt" , "enough"),
    new IngredientsModel("Pepper" , "enough"),
    new IngredientsModel("Met" , 150),
    new IngredientsModel("vegetables" , 50)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
