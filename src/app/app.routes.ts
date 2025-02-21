import { Routes } from '@angular/router';
import { ProductInformationComponent } from './product-information/product-information.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
    {path: '', component: ProductInformationComponent},
    {path:'add', component: ProductInformationComponent},
    {path:'list', component: ProductListComponent},
    {path:'**', redirectTo: ''},
];
