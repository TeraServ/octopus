import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Job } from './models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseURL="http://localhost:8080/api/job";
  

  constructor(private httpClient: HttpClient) { }
  getJobList():Observable<any>{
    return this.httpClient.get(this.baseURL+'/auth/listall');
    // <Job>(`$this{this.baseURL}`);
  }
}
