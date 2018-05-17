import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/shared/config';
 

@Injectable()
export class GetArticlesService {
API_PATH = API_URL;

constructor(private HttpClient: HttpClient) { } 
getAllArticles(): Observable<any>{
    return this.HttpClient.get<any>(
      `${this.API_PATH}/Article/GetAticles.php?`
    );
}

}
