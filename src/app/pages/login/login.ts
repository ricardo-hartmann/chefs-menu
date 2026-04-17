import { Component, inject, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  private authService = inject(Auth);
  private router = inject(Router)

  loginForm = new FormGroup({
    email: new FormControl('', []),
    password: new FormControl('', [])
  }) // OBS.: Padrão FormGroup (é o grupo de inputs, o formulário literalmente). FormControl = inputs bascamente

ngOnInit(): void {
  if (this.authService.estaLogado()){
    this.router.navigate(['/admin/dashboard'])
  }
}

onSubmit() {
  const {email, password} = this.loginForm.getRawValue();

  this.authService.login(email!, password!).subscribe({
    next: () => this.router.navigate(['/admin/dashboard']),

  })
} // A Exclamação indica que O valor vai estar presente. A interrogação indica que pode ou não estar presente, pois o input pode estar vazio.

}