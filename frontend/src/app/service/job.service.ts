import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseURL="http://localhost:8080/api/job";
  
  constructor(private httpClient: HttpClient) {}
  getJobList():Observable<any>{
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json')
    return this.httpClient.get(this.baseURL+'/auth/listall',{headers:httpHeaders});
  }
  createJob(job:Job):Observable<any>{
    return this.httpClient.post(this.baseURL+'/new',job);
  }
  updateJob(job:Job):Observable<any>{
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json')
    return this.httpClient.put<any>(`${this.baseURL}/update/${job.id}`,job,{headers:httpHeaders});
  }
  deleteJob(id:number){
    console.log("Deleting with ID:"+id);
    return this.httpClient.delete(this.baseURL+'/delete/'+id,{reportProgress:true});
  }
}
