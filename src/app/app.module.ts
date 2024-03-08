import { HeaderComponent } from "./header/header.component";
import { CartComponent } from "./cart/cart.component";
import { ProductsComponent } from "./products/products.component";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { ApiService } from "./api.service";
import { CartService } from "./cart.service";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CartComponent,
        ProductsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
        
    ],
    providers: [ApiService,CartService],
    bootstrap: [AppComponent]
})
    export class AppModule { }
