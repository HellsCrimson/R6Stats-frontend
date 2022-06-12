import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:3000';
  
  constructor(private http: HttpClient ) {}

  getUserInfo(body: any){
    return this.http.post(this.url + '/api/user/info', body);
  }

  getUserStatsPvp(body: any){
    return this.http.post(this.url + '/api/user/statsPvp', body);
  }

  getUserStatsPve(body: any){
    return this.http.post(this.url + '/api/user/statsPve', body);
  }
}
