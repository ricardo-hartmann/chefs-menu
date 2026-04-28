import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Menu } from '../../../services/menu';
import { Dish } from '../../../models/dish';

@Component({
  selector: 'app-dish-form',
  imports: [ReactiveFormsModule],
  templateUrl: './dish-form.html',
  styleUrl: './dish-form.css',
})
export class DishForm implements OnInit {
  private formBuilder = inject(FormBuilder);
  private apiService = inject(Menu);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private itemId = signal<number | null>(null);

  formCadastro: FormGroup = this.formBuilder.group({
    description: [''],
    name: [''],
    price: [null],
    available: [''],
    category: [''],
  })


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carregarDados(+id);
      this.itemId.set(+id);
    }
  }


  carregarDados(id: number) {

    this.apiService.getById(id).subscribe({
      next: (res: Dish) => {
        this.formCadastro.patchValue({
          name: res.name,
          description: res.description,
          price: res.price,
          available: res.available,
          category: res.category,
        })
      },
      error: (err: HttpErrorResponse) => {
        console.warn(err)
      }
    })

  }

  enviarDados(): void {
    const formData = this.formCadastro.value as Dish;

    if (this.itemId()) {
      this.apiService.update(this.itemId() as number, formData).subscribe({
        next: () => {
          alert('Cadastro atualizado com sucesso!');
          setTimeout(() => this.router.navigate(['/admin/dashboard']), 100);
        },

        error: (error: HttpErrorResponse) => {
          console.error(error)
        }
      })
    } else {

      this.apiService.create(formData).subscribe({
        next: () => {
          alert('Cadastro realizado com sucesso!');
          setTimeout(() => this.router.navigate(['/admin/dashboard']), 100);
        },
        error: (err: HttpErrorResponse) => {
          console.error(err)

          // this.errorMessage.set(err);

        }
      });
    }



  }
}


      // this.apiService.create(formData).subscribe({
      //   next: () => {
      //     alert('Cadastro realizado com sucesso!');
      //     setTimeout(() => this.router.navigate(['/admin/dashboard']), 100);
      //   },


// import { Component, inject, OnInit } from '@angular/core';
// import { Menu } from '../../../services/menu';
// import { HttpErrorResponse } from '@angular/common/http';
// import { FormBuilder } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-dish-form',
//   imports: [],
//   templateUrl: './dish-form.html',
//   styleUrl: './dish-form.css',
// })
// export class DishForm {}


// // export class DishForm implements OnInit{
// //   private formBuilder = inject(FormBuilder);
// //   private apiService = inject(Menu);
// //   private route = inject(ActivatedRoute);
// // }

// // ngOnInit(): void {
// //   const id = this.route.snapsho.paraMap.get('id');
// //   if (id) {
// //     this.carregarDados(+id);
// //   }
// // }

// // carregarDados(id: number) {
// //   this.apiService.getById(id).subscribe({
// //     next: (res: Menu) => {
// //       this.formCadastro.patchValue({
// //         name: res.name,
// //         description: res.description,
// //         price: res.price,
// //         type: res.type,
// //         available: res.available
// //       })
// //     },
// //     error: (err: HttpErrorResponse) => {
// //       console.warn(err)
// //     }
// //   })
// // }





// // if (this.itemId() {
// //   this.apiService.update(this.itemId() as number, formData).subscribe({
// //     next: () => {
// //       alert('Cadastro atualizado com sucesso!');
// //       setTimeout(() => this.router.navigate(['/admin/dashboard']), 100);
// //     },
// //     error: (error: HttpErrorResponse) => {
// //       console.error(error.error)
// //     }
// //   })
// // } else {
// //   this.apiService.create(FormData).subscribe ({
// //    next: () => {
// //     alert('Cadastro realizado com sucesso"');
// //     setTimeout(() => this.router.navigate(['/admin/dashboard']), 100);
// //    }
// //   })
// // })
