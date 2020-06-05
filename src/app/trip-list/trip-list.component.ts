import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../services/trip.services';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  category : any;
  listTrip;

  constructor(private route: ActivatedRoute, private tripService: TripService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => {
        this.category = params;
        this.tripService.getTripByCategory(this.category.id)
          .then((data) => {
            this.listTrip = data;
            console.log(this.listTrip);
          });
      }
    )
  }
}
