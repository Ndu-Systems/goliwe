import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/shared/config';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class UploadService {
API_PATH = API_URL;
constructor(private httpClient: HttpClient) { }
   
  uploadFile(file:File): Observable<any>{
    let formData = new FormData();
    formData.append('file', file);
    formData.append('name', file.name);
    return this.httpClient.post<any>(`${this.API_PATH}/Article/upload.php`,formData);
  }

}
