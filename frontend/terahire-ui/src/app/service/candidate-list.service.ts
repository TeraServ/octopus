import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateListService {

   private baseURL = "http://localhost:8080/api/candidate/";

  constructor(private httpClient: HttpClient) { }

  getCandidateList(): Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>('${this.baseURL}'+'viewCandidates');
  }
}
