import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class CartService {

    private url:String = environment.urlBooking;
    private cart: any = null;

    constructor(private httpClient: HttpClient){

    }

    addTripToCart(nbPerson: number, price: number, instanceId: number, userId: number){
        var totalPrice = price * nbPerson;
        return this.httpClient.post(this.url + "Cart/add", {nbPerson : nbPerson, idTrip: instanceId, idUser: userId, totalPrice : totalPrice});
    }

    async getCartByUser(userId){
        return await this.httpClient.get(this.url + "Cart/byUser/" + userId).toPromise();
    }

    setCart(id: number, nbPerson: number, totalPrice: number, instanceId: number, userId: number, instance :any){
        this.cart = {id: id, nbPerson : nbPerson, totalPrice: totalPrice, tripId: instanceId, userId: userId, instance: instance };
    }

    getCart(){
        return this.cart;
    }
}