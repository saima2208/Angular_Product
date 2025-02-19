import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductInformationComponent } from "./product-information/product-information.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductInformationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product';
}
