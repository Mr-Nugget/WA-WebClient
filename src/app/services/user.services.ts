import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

/**
 * User service to authentification (login, register)
 */
@Injectable()
export class UserService{
    private url: string = environment.urlUser;

    constructor(private httpClient: HttpClient){}

    async createUser(firstname: String, lastname: String, mail: String, password: String){
        return await this.httpClient.post(this.url + 'User/add', 
                        { firstname: firstname, lastname: lastname, mail: mail, password: password }).toPromise();
    }
}