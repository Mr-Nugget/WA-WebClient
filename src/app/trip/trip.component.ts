import { Component, OnInit } from '@angular/core';
import { TripInstanceService } from '../services/trip-instance.services';
import { TripService } from '../services/trip.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  trip: any;
  dates;

  constructor(private tripInstanceService: TripInstanceService,
    private tripService: TripService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    var tripId;
    this.trip = history.state.data;
    if (this.trip == undefined || this.trip == null) {
      tripId = this.route.snapshot.paramMap.get("id");
      this.tripService.getTripById(tripId)
        .then((data) => {
          this.trip = data;
          this.getTripInstances(this.trip.id);
        })
        .catch((error) => {
          console.log(error);
        });
    }else{
      this.getTripInstances(this.trip.id);
    }
  }

  /**
   * Get tripInstances assciated to a trip and sort it by beginDate attribute
   * @param tripId 
   */
  getTripInstances(tripId) {
    this.tripInstanceService.getTripInstanceByTrip(tripId)
      .then((data) => {
        this.dates = data;
        // Sort the array by date
        this.dates.sort((a, b) => {
          return <any>new Date(a.endDate) - <any>new Date(b.beginDate);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
