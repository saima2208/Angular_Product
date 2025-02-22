// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { Product } from '../app.component';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-product-information',
//   imports: [FormsModule],
//   templateUrl: './product-information.component.html',
//   styleUrl: './product-information.component.css'
// })
// export class ProductInformationComponent {
//   products: Product = new Product(0, '', 0, 0, new Date(), new Date(), '', '');
//   isUpdate = false;
//   constructor(private router: Router) {
//     const nav = this.router.getCurrentNavigation();
//     if (nav?.extras.state && nav.extras.state['product']) {
//       this.products = nav.extras.state['product'];
//       this.isUpdate = true;
//     }
//   }

//   ngOnInit(): void {
//     console.log('product-informationComponent');
//     localStorage.setItem('id','0');
//     localStorage.setItem('product_name','XX');
//     localStorage.setItem('product_price', '0');
//     localStorage.setItem('quantity','0');
//     localStorage.setItem('purchase_date','new Date()');
//     localStorage.setItem('sell_date','new Date()');
//     localStorage.setItem('buy_from','');
//     localStorage.setItem('sell_to','');
//   }

//   onSubmit() {
//     let products: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
//     if (this.isUpdate) {
//       products = products.map((product) => (product.id == this.products.id ? this.products : product));
//     } else {
//       products.push(this.products);
//     }
//     localStorage.setItem('products', JSON.stringify(products));
//     this.products = new Product(0, '', 0, 0, new Date(), new Date(), '', '');
//    // alert('User added successfully');
//     this.router.navigate(['/list']);
//   }

// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../app.component';  // Ensure the import path is correct
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-product-information',
  imports: [FormsModule],
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent {
  products: Product = new Product('', '', 0, 0, new Date(), new Date(), '', '');
  isUpdate = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['product']) {
      this.products = nav.extras.state['product'];
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
    console.log('product-informationComponent');
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify([])); // Initialize empty products array if none exists
    }
  }

  generateUniqueId(): string {
    return uuidv4(); // Generate unique ID using UUID
  }

  onSubmit() {
    let products: Product[] = JSON.parse(localStorage.getItem('products') || '[]');

    // If it's a new product, generate a unique ID
    if (!this.isUpdate) {
      this.products.id = this.generateUniqueId(); // Assign unique ID to the new product
    }

    if (this.isUpdate) {
      // If it's an update, replace the existing product with the updated one
      products = products.map((product) => (product.id === this.products.id ? this.products : product));
    } else {
      // If it's a new product, push it to the list
      products.push(this.products);
    }

    // Save the updated products list back to localStorage
    localStorage.setItem('products', JSON.stringify(products));

    // Reset the form after submission
    this.products = new Product('', '', 0, 0, new Date(), new Date(), '', '');

    // Navigate back to the product list page
    this.router.navigate(['/list']);
  }
}



