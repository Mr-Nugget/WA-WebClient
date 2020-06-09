import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

/**
 * Trip service to get the list of trip depending on category id
 */
@Injectable()
export class TripService{
    private url: string = environment.urlTrip;

    constructor(private httpClient: HttpClient){}

    async getTripByCategory(categoryId){
        return await this.httpClient.get(this.url + "Trip/byCategory/" + categoryId).toPromise();
    }

    async getTripById(id){
        return await this.httpClient.get(this.url + "Trip/byId/" + id).toPromise();
    }
}