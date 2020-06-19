import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

/**
 * TripInstance service to get the list of tripInstance depending on trip id
 */
@Injectable()
export class TripInstanceService{
    private url: string = environment.urlTrip;

    constructor(private httpClient: HttpClient){}

    async getTripInstanceByTrip(tripId){
        return await this.httpClient.get(this.url + "Dates/byTrip/" + tripId).toPromise();
    }

    async getTripInstanceById(instanceId){
        return await this.httpClient.get(this.url + "Dates/byId/" + instanceId).toPromise();
    }
}