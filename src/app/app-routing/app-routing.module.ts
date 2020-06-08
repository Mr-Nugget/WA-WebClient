import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '../categories/categories.component';
import { TripListComponent } from '../trip-list/trip-list.component';
import { TripComponent } from '../trip/trip.component';



const routes: Routes = [
  { path:'categories', component: CategoriesComponent},
  { path: 'tripList', component: TripListComponent },
  { path: 'trip', component: TripComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
