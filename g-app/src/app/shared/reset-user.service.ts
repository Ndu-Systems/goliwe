import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from 'src/app/shared/user-data.service';
import { API_URL } from 'src/app/shared/config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetUserService {

  API_PATH = API_URL;
  constructor(private UserDataService:UserDataService,private httpClient:HttpClient) { }
  
  resetUser(email:string, password:string):Observable<any>{
    return this.httpClient.get<any>(`${this.API_PATH}/Account/SignIn.php?Email=${email}&Password=${password}`);
          }

}
