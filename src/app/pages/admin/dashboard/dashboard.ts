import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Menu } from '../../../services/menu';
import { Dish } from '../../../models/dish';

 

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  private menuService = inject(Menu);

  pratos = signal<Dish[]>([]);
  carregandoPratos = signal(true);

  ngOnInit(): void {
    this.carregarPratos()
  }

  deletar(id: number) {
    this.menuService.delete(id).subscribe(
      (res) => {
        this.carregarPratos()
      })
  }

  carregarPratos() {
    this.menuService.getAll().subscribe({
      next: (res) => {
        this.pratos.set(res);
        this.carregandoPratos.set(false);
        console.log(this.pratos);
      }
    })
  }
}
