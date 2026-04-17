import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Menu {

  private http = inject(HttpClient);
  private apiUrl = "https://api-senai-angular.vercel.app/api";
  private publicUrl = "/dishes";
  private adminUrl = "/admin/dishes";

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl + this.publicUrl)
  }

}