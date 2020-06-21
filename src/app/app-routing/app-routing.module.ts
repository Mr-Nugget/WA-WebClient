import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '../categories/categories.component';
import { TripListComponent } from '../trip-list/trip-list.component';
import { TripComponent } from '../trip/trip.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { AuthGuard } from '../services/auth-guard.service';
import { CartComponent } from '../cart/cart.component';
import { PaymentComponent } from '../payment/payment.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent},
  { path: 'tripList', component: TripListComponent },
  { path: 'trip/:id', component: TripComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reservation', canActivate: [AuthGuard], component: ReservationComponent},
  { path: 'cart', canActivate: [AuthGuard], component: CartComponent },
  { path: 'payment', canActivate: [AuthGuard], component: PaymentComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
