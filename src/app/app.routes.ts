import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Cart } from './pages/cart/cart';
import { Checkout } from './pages/checkout/checkout';
import { ProductDetail } from './pages/product-detail/product-detail';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';

export const routes: Routes = [
    { path: 'home', component: Home},
    { path: 'products', component: Products },
    { path: 'register', component: Register},
    { path: 'login', component: Login},
    { path: 'cart', component: Cart },
    { path: 'checkout', component: Checkout },
    { path: 'product-detail', component: ProductDetail },
    { path: '404', component: PageNotFound },
    { path: '**', redirectTo: '404', pathMatch:'full'},
    { path: '', redirectTo: 'home', pathMatch:'full'},
];
