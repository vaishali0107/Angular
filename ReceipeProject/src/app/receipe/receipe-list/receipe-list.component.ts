import { Component, OnInit } from '@angular/core';
import { Receipe } from "../receipe.model";
@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss']
})
export class ReceipeListComponent implements OnInit {
  receipe:Receipe[]=[
    new Receipe("chilly Potato","Made with fresh potatoes and vegetables","https://media.istockphoto.com/photos/crispy-honey-chilli-potatoes-are-a-super-addictive-snack-from-indian-picture-id1251680140?b=1&k=6&m=1251680140&s=170667a&w=0&h=rY1LrsWFOmfDwLLKo8EHZ4feyVrLdTetR1j14F93rxk="),
    new Receipe("chilly Potato","Made with fresh potatoes and vegetables","https://media.istockphoto.com/photos/crispy-honey-chilli-potatoes-are-a-super-addictive-snack-from-indian-picture-id1251680140?b=1&k=6&m=1251680140&s=170667a&w=0&h=rY1LrsWFOmfDwLLKo8EHZ4feyVrLdTetR1j14F93rxk=")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
