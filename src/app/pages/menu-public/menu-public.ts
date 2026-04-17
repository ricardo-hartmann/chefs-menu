import { Component, inject, OnInit } from '@angular/core';
import { Menu } from '../../services/menu';

@Component({
  selector: 'app-menu-public',
  imports: [],
  templateUrl: './menu-public.html',
  styleUrl: './menu-public.css',
})
export class MenuPublic implements OnInit {

  private menuService = inject(Menu)

  public menus: any[] = [];

  ngOnInit(): void {
    this.menuService.getAll().subscribe({
      next: (res) => {this.menus = res; console.log(this.menus)}
    })
  }
}