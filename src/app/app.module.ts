import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from './categories/categories.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CategoryService } from './services/category.service';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripService } from './services/trip.services';
import { TripComponent } from './trip/trip.component';
import { TripInstanceService } from './services/trip-instance.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from './services/user.services';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service'
import { AuthGuard } from './services/auth-guard.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ReservationComponent } from './reservation/reservation.component';
import { CartService } from './services/cart.service';
import { CartComponent } from './cart/cart.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PaymentComponent } from './payment/payment.component'
import { BookingService } from './services/booking.service';
import { PaymentService } from './services/payment.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { ErrorComponent } from './error/error.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommentComponent } from './comment/comment.component';
import { CommentService } from './services/comment.service';
import { CommentSuccessComponent } from './comment-success/comment-success.component';
import { GatewaySecurityService } from './services/gateway-security.service';




@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TripListComponent,
    TripComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ReservationComponent,
    CartComponent,
    PaymentComponent,
    ConfirmationComponent,
    UserBookingsComponent,
    ErrorComponent,
    PageNotFoundComponent,
    CommentComponent,
    CommentSuccessComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    NgxSpinnerModule
  ],
  providers: [
    CategoryService,
    TripService,
    TripInstanceService,
    UserService,
    CookieService,
    AuthGuard,
    CartService,
    BookingService,
    PaymentService,
    CommentService,
    GatewaySecurityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
