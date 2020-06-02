import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

/**
 * Category service to get the list of all categories
 */
@Injectable()
export class CategoryService{
    private url: string = environment.urlTrip;

    constructor(private httpClient: HttpClient){}

    async getAllCategories(){
        return await this.httpClient.get(this.url + "Category/all").toPromise();
    }
}