import { Component, input } from '@angular/core';
import { Dish } from '../../models/dish';

@Component({
  selector: 'app-dish-card',
  imports: [],
  templateUrl: './dish-card.html',
  styleUrl: './dish-card.css',
})
export class DishCard {
  menu = input.required<Dish>();
  
  pedido() {
    alert("Seu pedido está sendo preparado!")
  }

}