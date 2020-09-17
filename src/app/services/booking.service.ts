import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GatewaySecurityService } from './gateway-security.service';


@Injectable()
export class BookingService {

    private url:String = environment.urlAPI + environment.bookingMicroservice;

    constructor(private httpClient: HttpClient, private header: GatewaySecurityService){
    }

    async createReservation(cart: any){
        return await this.httpClient.post(this.url + "Booking/add", {
            nbPerson : cart['nbPerson'],
            date : new Date(),
            status: 1,
            payed: false,
            userId: cart['userId'],
            tripId: cart['tripId']
        }, this.header.getHeaderAuthorization()).toPromise();
    }

    getBookingsOfUser(userId: number){
        return this.httpClient.get(this.url + "Booking/byUser/" + userId, this.header.getHeaderAuthorization());
    }
}