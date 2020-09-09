import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { UserBookingsComponent } from '../user-bookings/user-bookings.component';
import { ErrorComponent } from '../error/error.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CommentComponent } from '../comment/comment.component';
import { CommentSuccessComponent } from '../comment-success/comment-success.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent},
  { path: 'tripList', component: TripListComponent },
  { path: 'trip/:id', component: TripComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reservation', canActivate: [AuthGuard], component: ReservationComponent},
  { path: 'cart', canActivate: [AuthGuard], component: CartComponent },
  { path: 'payment', canActivate: [AuthGuard], component: PaymentComponent },
  { path: 'confirmation', canActivate: [AuthGuard],  component: ConfirmationComponent },
  { path: 'myBookings', canActivate: [AuthGuard], component: UserBookingsComponent },
  { path: 'comment/:tripId', canActivate: [AuthGuard], component: CommentComponent },
  { path: 'commentSuccess', canActivate: [AuthGuard], component: CommentSuccessComponent },
  { path: 'error', canActivate: [AuthGuard], component: ErrorComponent },
  { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
