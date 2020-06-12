import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    /**
     * Create a new user 
     * return a promise with json reponse status (success : 201, failed: 400)
     * @param firstname 
     * @param lastname 
     * @param mail 
     * @param password 
     */
    async createUser(firstname: String, lastname: String, mail: String, password: String){
        return await this.httpClient.post(this.url + 'User/add', 
                        { firstname: firstname, lastname: lastname, mail: mail, password: password }).toPromise();
    }
    /**
     * Log a user with mail and password
     * Return a new JWT token if it succeed.
     * Status error 404 if not
     * @param mail 
     * @param password 
     */
    async authenticate(mail: String, password: String){
        return await this.httpClient.post(this.url + "User/authenticate",
                        { mail : mail, password : password }).toPromise();
    }

    async getUserbyToken(jwt: string) {
        const headers = new HttpHeaders()
            .set("Authorization", "Bearer " + jwt);
        return await this.httpClient.get(this.url + "User/byToken/" + jwt,
                                        { headers })
                                        .toPromise();
      }
}