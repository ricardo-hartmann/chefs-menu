import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root',
})

export class Menu {

  private http = inject(HttpClient);
  private apiUrl = "https://api-senai-angular.vercel.app/api";
  private publicUrl = "/dishes";
  private adminUrl = "/admin/dishes"


  getAll(): Observable<any> {
    return this.http.get(this.apiUrl + this.publicUrl);
  }

  getById(id: number): Observable<Dish> {
    return this.http
    .get<Dish>(this.apiUrl + this.publicUrl + '/' + id)
  }

  create(data: Dish): Observable<Dish> {
    return this.http.post<Dish>(this.apiUrl + this.adminUrl, data);
  }

  update(id: number, data: any): Observable<Dish> {
    return this.http.put<Dish>(`${this.apiUrl}/admin/dishes/${id}`, data);
  }

  // update(id: number, data: Dish): Observable<Dish> {
  //   return this.http.put<Dish>(this.apiUrl + this.adminUrl + '/' + id, data)
  // }


  delete(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + this.adminUrl + '/' + id)
  }

}















// export class Dish {

  //   private http = inject(HttpClient);
  //   private apiUrl = "https://api-senai-angular.vercel.app/api";
  //   private publicUrl = "/dishes";
  //   private adminUrl = "/admin/dishes";
  
  //   getAll(): Observable<any> {
  //     return this.http.get(this.apiUrl + this.publicUrl)
  //   }
  
  // }
  
  // getById(id: number): Observable<Menu> {
  //   return this.http.get<Menu>(this.apiUrl + this.publicUrl + '/' + id)
  // }
  
  // createImageBitmap(data: Menu): Observable<Menu> {
  //   return this.ttp.post<Menu>(this.apiUrl + this.adminUrl, data);
  // }