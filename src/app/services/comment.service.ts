import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentService {

    private url:String = environment.urlTrip;

    constructor(private httpClient: HttpClient){
    }

    async addComment(comment: any){
        console.log(comment);
        return await this.httpClient.post(this.url + "Comment/add", {
            content : comment['content'],
            tripId : comment['tripId'],
            userId: comment['userId'],
            username: comment['username'],
            date : new Date(),
        }).toPromise();
    }
}