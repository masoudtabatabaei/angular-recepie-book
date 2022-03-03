import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:RecipeModel[] = [
    new RecipeModel("Recipe A" , "Description of Recipe A" , "recipe-1.jpg"),
    new RecipeModel("Recipe B" , "Description of Recipe B" , "recipe-2.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
