import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.services';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  trip : any;
  instance: any;
  reservationForm : FormGroup;
  defaultSelect = 1;

  constructor(private cartService: CartService, private userService: UserService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.trip = history.state.trip;
    this.instance = history.state.instance;

    if(this.trip == undefined || this.instance == undefined){
      this.router.navigate(['/cart']);
    }
    
    this.reservationForm = new FormGroup({
      nbPerson: new FormControl('', Validators.required)
    });
  }

  reservationSubmit(){
    const id = +this.cookieService.get('userId');
    this.cartService.addTripToCart(this.reservationForm.value['nbPerson'],
                                   this.instance['price'],
                                   this.instance['id'],
                                   id)
                                   .subscribe(
                                     (data)=> {
                                      console.log(data);
                                      this.cartService.setCart(data['id'], data['nbPerson'], data['totalPrice'], data['idTrip'], data['idUser'], this.instance);
                                      this.router.navigate(['/cart']);
                                    },
                                     (error)=> {
                                      console.error(error);
                                    });
  }

}
