import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseURL = "http://localhost:8080/api/user/";

  constructor(private httpClient: HttpClient) {}

  getUserList(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}` + 'getUsers/' + id);
  }

  updateUser(user:User):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}` + 'updateNewUser/' + user.id, user);
  }

}
