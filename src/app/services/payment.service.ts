import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GatewaySecurityService } from './gateway-security.service';


@Injectable()
export class PaymentService {

    private url:String = environment.urlAPI + environment.paymentMicroservice;

    constructor(private httpClient: HttpClient, private header: GatewaySecurityService){
    }

    addPayment(data: any, funding: string, bookingId :number){
        var extractedData = this.extractDataFromPaypal(data, funding, bookingId);
        return this.httpClient.post(this.url + "Payment/add", extractedData, this.header.getHeaderAuthorization());
    }

    extractDataFromPaypal(data, funding, bookingId): any{
        return {
            createDate: data['create_time'],
            updateDate: data['update_time'],
            transactionNumber: data['id'],
            currency: data['purchase_units'][0]['amount']['currency_code'],
            price: parseFloat(data['purchase_units'][0]['amount']['value']),
            authorized: true,
            bookingId: bookingId,
            message: "",
            status: data['status'],
            fundingSource: funding,
            payerName: data['payer']['name']['surname'],
            payerFirstname: data['payer']['name']['given_name'],
            payerMail: data['payer']['email_address'],
            payerCountryCode: data['payer']['address']['country_code'],
        }
    }
}