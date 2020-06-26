import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from '../services/cart.service';
import { TripInstanceService } from '../services/trip-instance.services';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any;
  isEmpty: boolean = true;

  constructor(
    private cookieService: CookieService,
    private cartService: CartService,
    private bookingService: BookingService,
    private instanceService: TripInstanceService,
    private router: Router,
    private spinner : NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.spinner.show();
    // Get the cart associated to the user
    this.cartService.getCartByUser(this.cookieService.get('userId'))
      .then((cart) => {
        // Get the trip associated to the cart
        this.instanceService.getTripInstanceById(cart['idTrip'])
          .then((trip) => {
            this.cartService.setCart(cart['id'], cart['nbPerson'], cart['totalPrice'], cart['idTrip'], cart['idUser'], trip);
            this.cart = this.cartService.getCart();
            this.spinner.hide();
            this.isEmpty = false;
          })
          .catch((error) => {
            console.error(error);
            this.isEmpty =  true;
            this.spinner.hide();
          });
      })
      .catch((error) => {
        console.log(error);
        this.isEmpty = true;
        this.spinner.hide();
      });
  }

  payment() {
    this.bookingService.createReservation(this.cart)
      .then((data)=> {
        this.cartService.cleanCart(this.cart['id'])
          .subscribe(
            (data)=>{
              console.log(data);
            },
            (error)=>{
              console.log(error)
            });
        this.router.navigate(['/payment'], { state: { cart: this.cart, booking: data } });
      })
      .catch((error) => {
        console.error(error);
        this.cartService.cleanCart(this.cart['id'])
          .subscribe(
            ()=>{
              this.router.navigate(['/error']);
            },
            (error)=>{
              console.log(error);
            });
      });
  }

}
