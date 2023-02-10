import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private baseURL = "http://localhost:8080/api/candidate/";

  constructor(private httpClient: HttpClient) { }

  getCandidateList(): Observable<Candidate[]> {
    return this.httpClient.get<Candidate[]>(`${this.baseURL}` + 'viewCandidates');
  }
  updateCandidate(candidate:Candidate):Observable<any>{
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json')
    return this.httpClient.put<Candidate>(`${this.baseURL}`+'updateCandidate/'+candidate.id,candidate);
    // return this.httpClient.put<>
  }

  createCandidate(candidate: Candidate): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + 'newCandidate', candidate);
  }

  deleteCandidate(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}` + 'deleteCandidate' + '/' + id);
  }
}
