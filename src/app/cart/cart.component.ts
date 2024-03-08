import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,ProductsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers: [CartService]
})
export class CartComponent implements OnInit{
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }


}
