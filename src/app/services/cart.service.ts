import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GatewaySecurityService } from './gateway-security.service';


@Injectable()
export class CartService {

    private url:String = environment.urlAPI + environment.bookingMicroservice;
    private cart: any = null;

    constructor(private httpClient: HttpClient, private header: GatewaySecurityService){

    }

    addTripToCart(nbPerson: number, price: number, instanceId: number, userId: number){
        var totalPrice = price * nbPerson;
        return this.httpClient.post(this.url + "Cart/add", {nbPerson : nbPerson, idTrip: instanceId, idUser: userId, totalPrice : totalPrice}, this.header.getHeaderAuthorization());
    }

    async getCartByUser(userId){
        return await this.httpClient.get(this.url + "Cart/byUser/" + userId, this.header.getHeaderAuthorization()).toPromise();
    }

    setCart(id: number, nbPerson: number, totalPrice: number, instanceId: number, userId: number, instance :any){
        this.cart = {id: id, nbPerson : nbPerson, totalPrice: totalPrice, tripId: instanceId, userId: userId, instance: instance };
    }

    getCart(){
        return this.cart;
    }

    cleanCart(id: number){
        this.cart = null;
        return this.httpClient.get(this.url + "Cart/clean/" + id, this.header.getHeaderAuthorization());
        
    }

}