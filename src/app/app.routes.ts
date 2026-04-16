import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { MenuPublic } from './pages/menu-public/menu-public';
import { Dashboard } from './pages/admin/dashboard/dashboard';
import { DishForm } from './pages/admin/dish-form/dish-form';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: 'full'},
    {path: "login", component: Login},
    {path: "home", component: MenuPublic},
    {path: "admin", children:[
        {path: "dashboard", component: Dashboard},
        {path: "dish-form", component: DishForm},
    ]},
];