import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from '../services/cart.service';
import { TripInstanceService } from '../services/trip-instance.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any;

  constructor(private cookieService: CookieService, private cartService: CartService, private instanceService: TripInstanceService, private router: Router) { }

  ngOnInit(): void {
    // Get the cart associated to the user
    this.cartService.getCartByUser(this.cookieService.get('userId'))
      .then((cart) => {
        // Get the trip associated to the cart
        this.instanceService.getTripInstanceById(cart['idTrip'])
          .then((trip) => {
            this.cartService.setCart(cart['id'], cart['nbPerson'], cart['totalPrice'], cart['idTrip'], cart['idUser'], trip);
            this.cart = this.cartService.getCart();
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  payment(){
    console.log(this.cart);
    this.router.navigate(['/payment'], { state : { data : this.cart }});
  }

}
