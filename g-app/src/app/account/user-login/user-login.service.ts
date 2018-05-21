import { User } from './../../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/shared/config';
 

@Injectable()
  export class UserLoginService {
    API_PATH = API_URL;
    user : User;
    constructor(private httpClient:HttpClient) { }

    public loginUser(lEmail:string,lPassword:string): Observable<any>{
       return this.httpClient.get<any>(`${this.API_PATH}/Account/SignIn.php?Email=${lEmail}&Password=${lPassword}`);
    }
}
