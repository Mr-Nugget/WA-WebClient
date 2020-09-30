import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GatewaySecurityService } from './gateway-security.service';

/**
 * TripInstance service to get the list of tripInstance depending on trip id
 */
@Injectable()
export class TripInstanceService{
    private url: string = environment.urlAPI + environment.tripMicroservice;

    constructor(private httpClient: HttpClient, private header: GatewaySecurityService){}

    async getTripInstanceByTrip(tripId){
        return await this.httpClient.get(this.url + "Dates/byTrip/" + tripId, this.header.getHeaderAuthorization()).toPromise();
    }

    async getTripInstanceById(instanceId){
        return await this.httpClient.get(this.url + "Dates/byId/" + instanceId, this.header.getHeaderAuthorization()).toPromise();
    }
}