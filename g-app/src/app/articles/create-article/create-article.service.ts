import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/shared/config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()

export class CreateArticleService {
  API_PATH = API_URL;
  constructor(private httpClient: HttpClient) { }

  addArticle(model): Observable<any>{
    return this.httpClient.post(`${this.API_PATH}/Article/AddArticle.php`,model);
  }

  uploadArticleDocument(file:File): Observable<any>{
    let formData = new FormData();
    formData.append('file', file);
    formData.append('name', file.name);
    return this.httpClient.post<any>(`${this.API_PATH}/Article/upload.php`,formData);
  }
  
}
