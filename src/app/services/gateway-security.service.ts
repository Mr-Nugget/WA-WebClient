import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable()
export class GatewaySecurityService{

    constructor(){
    }

    getHeaderAuthorization(){
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append("Authorization", "Basic " + btoa(environment.gatewayUser +':'+environment.gatewayPassword));
        return { headers : httpHeaders };
    }
}