import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';

export const routes: Routes = [
    {path:'products', component:ProductsComponent},
    {path:'add-product/:pid', component:CreateProductComponent},
    {path:'product-details/:pid', component:ProductsDetailsComponent},
];
