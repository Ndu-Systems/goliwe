import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/shared/config';
import { Injectable } from '@angular/core';

@Injectable()
export class UserRegistrationService {
  API_PATH = API_URL;
constructor(private httpClient: HttpClient) { }

    registerUser(model):Observable<any>{
       console.log(model);
      return this.httpClient.post(`${this.API_PATH}/Account/signup.php`,model);
      }
}
