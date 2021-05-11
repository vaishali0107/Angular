import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient("Potatoes",5),
    new Ingredient("Tomatoes",3),
    new Ingredient("capsicum",2),
    new Ingredient("salt",1),
    new Ingredient("Redchilly",1),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
