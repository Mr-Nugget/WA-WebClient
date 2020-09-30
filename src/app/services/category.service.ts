import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GatewaySecurityService } from './gateway-security.service';

/**
 * Category service to get the list of all categories
 */
@Injectable()
export class CategoryService{
    private url: string = environment.urlAPI + environment.tripMicroservice;

    constructor(private httpClient: HttpClient, private header: GatewaySecurityService){}

    async getAllCategories(){
        

        return await this.httpClient.get(this.url + "Category/all", this.header.getHeaderAuthorization()).toPromise();
    }
}