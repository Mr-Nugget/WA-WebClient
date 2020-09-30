import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GatewaySecurityService } from './gateway-security.service';

/**
 * Trip service to get the list of trip depending on category id
 */
@Injectable()
export class TripService{
    private url: string = environment.urlAPI + environment.tripMicroservice;

    constructor(private httpClient: HttpClient, private header: GatewaySecurityService){}

    async getTripByCategory(categoryId){
        return await this.httpClient.get(this.url + "Trip/byCategory/" + categoryId, this.header.getHeaderAuthorization()).toPromise();
    }

    async getTripById(id){
        return await this.httpClient.get(this.url + "Trip/byId/" + id, this.header.getHeaderAuthorization()).toPromise();
    }
}