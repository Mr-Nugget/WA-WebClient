import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt'
import { GatewaySecurityService } from './gateway-security.service';

/**
 * User service to authentification (login, register, isConnected)
 */
@Injectable()
export class UserService {

    private url: string = environment.urlAPI + environment.userMicroservice;
    private myUser: any;
    private jwtHelper;

    constructor(private httpClient: HttpClient, private cookieService: CookieService, private header: GatewaySecurityService) {
        this.myUser = null;
        this.jwtHelper = new JwtHelperService();
    }

    /**
     * Create a new user 
     * return a promise with json reponse status (success : 201, failed: 400)
     * @param firstname 
     * @param lastname 
     * @param mail 
     * @param password 
     */
    async createUser(firstname: String, lastname: String, mail: String, password: String) {
        return await this.httpClient.post(this.url + 'User/add',
            { firstname: firstname, lastname: lastname, mail: mail, password: password }, this.header.getHeaderAuthorization()).toPromise();
    }
    /**
     * Log a user with mail and password
     * Return a new JWT token if it succeed.
     * Status error 404 if not
     * @param mail 
     * @param password 
     */
    async authenticate(mail: String, password: String) {
        return await this.httpClient.post(this.url + "User/authenticate",
            { mail: mail, password: password }, this.header.getHeaderAuthorization()).toPromise();
    }

    /**
     * Get a user by it's jwt token
     * @param jwt
     */
    getUserbyToken(jwt: string) {
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append("Authorization", "Bearer " + jwt).append("Authorization", "Basic " + btoa(environment.gatewayUser +':'+environment.gatewayPassword));
        return this.httpClient.get(this.url + 'User/byToken/' + jwt,
            { headers: httpHeaders });
    }
    /**
     * Set user infos with lastname and firstname
     * @param user
     */
    setUser(user: any) {
        this.myUser = user;
    }

    getUser() {
        if (this.myUser == null) {
            this.myUser = { firstname: this.cookieService.get('firstname'), lastname: this.cookieService.get('lastname') };
        }
        return this.myUser;
    }

    /**
     * To know if a user is authentificate for auth-guard
     */
    isAuth() {
        if (this.cookieService.check('jwt')) {
            const jwt = this.cookieService.get('jwt');
            return !this.jwtHelper.isTokenExpired(jwt);
        } else {
            return false;
        }
    }

    /**
      * Remove cookie authentification
      */
    logout() {
        this.cookieService.delete('jwt');
        this.cookieService.delete('firstname');
        this.cookieService.delete('lastname');
    }
}