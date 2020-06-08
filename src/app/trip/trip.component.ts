import { Component, OnInit } from '@angular/core';
import { TripInstanceService } from '../services/trip-instance.services';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  trip: any;

  constructor(tripInstanceService: TripInstanceService) { }

  ngOnInit(): void {
    this.trip = history.state.data
  }

}
