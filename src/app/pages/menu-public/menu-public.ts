
import { Component, inject, OnInit, signal } from '@angular/core';
import { Menu } from '../../services/menu';
import { DishCard } from '../../components/dish-card/dish-card';
import { Dish } from '../../models/dish';

@Component({
  selector: 'app-menu-public',
  imports: [DishCard],
  templateUrl: './menu-public.html',
  styleUrl: './menu-public.css',
})
export class MenuPublic implements OnInit {
  private menuService = inject(Menu);

  menus = signal<Dish[]>([]);
  carregandoMenus = signal(true);

  ngOnInit(): void {
    this.menuService.getAll().subscribe({
      next: (res) => {
        this.menus.set(res);
        this.carregandoMenus.set(false);
        console.log(this.menus());
      },
    });
  }
}