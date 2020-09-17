import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GatewaySecurityService } from './gateway-security.service';

@Injectable()
export class CommentService {

    private url:String = environment.urlAPI + environment.tripMicroservice;

    constructor(private httpClient: HttpClient, private header: GatewaySecurityService){
    }

    async addComment(comment: any){
        console.log(comment);
        return await this.httpClient.post(this.url + "Comment/add", {
            content : comment['content'],
            tripId : comment['tripId'],
            bookingId: comment['bookingId'],
            userId: comment['userId'],
            username: comment['username'],
            date : new Date(),
        }, this.header.getHeaderAuthorization()).toPromise();
    }
}