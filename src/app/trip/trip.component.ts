import { Component, OnInit } from '@angular/core';
import { TripInstanceService } from '../services/trip-instance.services';
import { TripService } from '../services/trip.services';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  trip: any;
  dates;
  price: number;
  defaultSelect = 0;
  comments;
  
  reservationForm = new FormGroup({
    dates : new FormControl('', Validators.required)
  });

  constructor(private tripInstanceService: TripInstanceService,
    private tripService: TripService,
    private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    var tripId = this.activatedRoute.snapshot.paramMap.get("id");
      this.tripService.getTripById(tripId)
        .then((data) => {
          this.trip = data;
          console.log(data);
          this.comments = this.trip.comments;
          this.getTripInstances(this.trip.id);
        })
        .catch((error) => {
          console.log(error);
        });
  }

  /**
   * Get tripInstances assciated to a trip and sort it by beginDate attribute
   * @param tripId 
   */
  getTripInstances(tripId) {
    this.tripInstanceService.getTripInstanceByTrip(tripId)
      .then((data) => {
        if (data != null) {
          this.dates = data;
          // Sort the array by date
          this.dates.sort((a, b) => {
            return <any>new Date(a.endDate) - <any>new Date(b.beginDate);
          });
          this.price = this.dates[0].price;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /**
   * Set the right Price on select event change option
   * @param tripInstanceId
   */
  onOptionsSelected(instanceIndex: string) {
    const instance = this.dates[instanceIndex];
    this.price = instance.price;
  }

  reservationSubmit(){
    const tripInstance = this.dates[this.reservationForm.value['dates']];
    console.log(tripInstance)
    this.router.navigate(['/reservation'], {state: {trip: this.trip, instance : tripInstance}});
  }

}
