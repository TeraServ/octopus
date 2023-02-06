import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }


  baseUrl:string = "http://localhost:8080/api/user/";

  
  

  

  getAllUsers(): Observable<any>{
    const header = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Basic ` + btoa('john@gmail.com:john@123'),
      }
    );
  
    
    return this.httpClient.get(`${this.baseUrl}`+'users',{headers:header})
  }

}
