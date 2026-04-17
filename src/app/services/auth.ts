import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class Auth {

private http = inject(HttpClient);
private router = inject(Router);

private apiUrl = "https://api-senai-angular.vercel.app/api/auth";

private TOKEN_KEY = "auth_token";

login(email: string, password: string): Observable<any> {
  return this.http.post<{token: string}>(this.apiUrl + "/login", {email, password})
  .pipe(tap((resp) => {localStorage.setItem(this.TOKEN_KEY, resp.token)}))
} // } Essa função Login tem que ser chamada lá no código de login.


logout(): void {
  localStorage.removeItem(this.TOKEN_KEY);
  this.router.navigate(['/login']); //redireciona para a página de login ao sair. Ajusar o if/else na NavBar para alterar o menu.
}

estaLogado(): boolean {
  return !!this.getToken();
}

getToken(): string | null {
  return localStorage.getItem(this.TOKEN_KEY);
}





// login(token: string) {
//   localStorage.setItem(this.TOKEN_KEY, token);
// }

// logout() {
//   localStorage.removeItem(this.TOKEN_KEY);
// }

// getToken(): string | null {
//   return localStorage.getItem(this.TOKEN_KEY);
// }

// isAuthenticated(): boolean {
//   return !!this.getToken();
// }
}