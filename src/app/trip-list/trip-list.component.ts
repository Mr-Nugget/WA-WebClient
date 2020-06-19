import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { TripService } from '../services/trip.services';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  category : any;
  listTrip;
  faArrowLeft = faArrowLeft;

  constructor(private route: ActivatedRoute, private tripService: TripService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => {
        this.category = params;
        this.tripService.getTripByCategory(this.category.id)
          .then((data) => {
            this.listTrip = data;
          });
      }
    )
  }

  navigateToTrip(trip){
    this.router.navigate(['/trip/' + trip.id], {state: {data : trip}});
  }
}
