import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { TripInstanceService } from '../services/trip-instance.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  faCheckCircle = faCheckCircle;
  faExclamationCircle = faExclamationCircle;
  isOk: boolean;
  booking: any;
  tripInstance: any;

  constructor(private tripInstanceService: TripInstanceService, private router: Router) { }

  ngOnInit(): void {
    
    this.booking = history.state.booking;
    if(this.booking == undefined || this.booking == null){
      this.router.navigate(['/myBookings']);
    }
    this.isOk = this.booking['payed'];
    this.tripInstanceService.getTripInstanceById(this.booking['tripId'])
        .then((data)=>{
          this.tripInstance = data;
        })
        .catch((error)=>{
          console.log(error);
        });
  }

}
