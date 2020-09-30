import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { Router } from '@angular/router';
import { PaymentService } from '../services/payment.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public payPalConfig ? : IPayPalConfig;
  showSuccess: boolean;
  showCancel: boolean;
  showError: boolean;
  cart: any;
  booking: any;
  funding: string;

  constructor(private router: Router, private paymentService: PaymentService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.cart = history.state.cart;
    this.booking = history.state.booking;
    if(this.cart == undefined){
      this.router.navigate(['/myBookings']);
    }
    this.initConfig();
  }

  private initConfig(): void {
    const totalPrice : string = this.cart.totalPrice;

    this.payPalConfig = {
        currency: 'EUR',
        clientId: 'Accv1mkYzFtQ1l764aQw0v1V7nabpQD7f9wxxd2xDF4OIbPv9heh5I3XbO6W0YfXFxuq2jWTUr0pnqFe',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: totalPrice,
                }
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'pay',
            layout: 'vertical',
            color: 'blue',
            shape : 'pill',
            size: 'large'
        },
        onApprove: (data, actions) => {
            this.spinner.show();
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then(details => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            
            this.paymentService.addPayment(data, this.funding, this.booking['id']).subscribe(
                ((data)=>{
                    this.router.navigate(['/confirmation'], {state: { booking: data }})
                }),
                ((error)=>{
                    console.log(error);
                    this.router.navigate(['/confirmation'], {state: { booking : null }})
                }));
            this.showSuccess = true;
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
            this.showCancel = true;

        },
        onError: err => {
            console.log('OnError', err);
            this.showError = true;
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
            this.funding = data['fundingSource'];
            this.resetStatus();
        },
    };
}
  resetStatus() {
    
  }
}