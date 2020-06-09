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

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TripListComponent,
    TripComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FontAwesomeModule
  ],
  providers: [
    CategoryService,
    TripService,
    TripInstanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
