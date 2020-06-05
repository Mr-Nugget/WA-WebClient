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

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TripListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CategoryService,
    TripService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
