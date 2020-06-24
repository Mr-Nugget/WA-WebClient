import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class BookingService {

    private url:String = environment.urlBooking;

    constructor(private httpClient: HttpClient){
    }

    async createReservation(cart: any){
        return await this.httpClient.post(this.url + "Booking/add", {
            nbPerson : cart['nbPerson'],
            date : new Date(),
            status: 1,
            payed: false,
            userId: cart['userId'],
            tripId: cart['tripId']
        }).toPromise();
    }
}