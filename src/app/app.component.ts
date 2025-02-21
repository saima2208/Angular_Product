import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductInformationComponent } from "./product-information/product-information.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product';
}
export class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  purchase_date: Date;
  sell_date: Date;
  buy_from: string;
  sell_to: string;


  constructor(id: number, name: string, price: number, quantity: number, purchase_date: Date, sell_date: Date, buy_from: string, sell_to: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.purchase_date = purchase_date;
    this.sell_date = sell_date;
    this.buy_from = buy_from;
    this.sell_to = sell_to;
  }

}
