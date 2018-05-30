 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EMAIL } from './config';
import { IEmail } from '../interfaces/IEmail';

@Injectable()
export class EmailService {

    API_PATH = EMAIL;
    constructor(private httpClient:HttpClient ) { }
  
    sendEmail(email:IEmail):Observable<any>{
         return this.httpClient.post(this.API_PATH, email)
    }

}