import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public totalItem : number = 0;
  constructor(private cartService : CartService) { }

  ngOnIt() : void{
    this.cartService.getProducts()
    .subscribe(res=>{

      this.totalItem = res.length;
    })
  }

}
