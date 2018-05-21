import { API_URL } from 'src/app/shared/config';
 
import { Observable } from 'rxjs/Observable'; 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 
@Injectable()

export class UserDataService {    
    API_PATH = API_URL;
        user:any;
        constructor(private httpClient: HttpClient) { }
            saveUser(user:any):Observable<any>{
                return  this.user = user;
            }
            getUser(): any{
                return this.user;            
            }
            resetUser(email:string, password:string):Observable<any>{
                return this.httpClient.get<any>(`${this.API_PATH}/Account/SignIn.php?email=${email}&password=${password}`);
            }
    
}
