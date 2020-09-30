import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { UserService } from '../services/user.services';
import { CookieService } from 'ngx-cookie-service';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent implements OnInit {

  data;
  notEmpty : boolean = false;
  faCheckCircle = faCheckCircle;
  faExclamationCircle = faExclamationCircle;

  constructor(private bookingService : BookingService, private cookieService : CookieService, private router: Router) { }

  ngOnInit(): void {
    this.bookingService.getBookingsOfUser(parseInt(this.cookieService.get("userId")))
          .subscribe(
            (data)=>{
              this.data = data;
              this.notEmpty = true;
            },
            (err)=>{
              console.error(err);
              this.notEmpty = false;
            });
  }

  goToPayment(index){
    const booking = this.data[index]['booking'];
    const totalPrice = (this.data[index]['trip']['body']['price'] * booking['nbPerson']).toFixed(2);
    console.log(totalPrice);
    this.router.navigate(['/payment'], {state : {booking : booking, cart: {totalPrice: totalPrice}}});
  }

}
