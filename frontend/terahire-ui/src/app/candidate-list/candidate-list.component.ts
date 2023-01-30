import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CandidateListService } from '../service/candidate-list.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {

  candidate: Candidate[];

  constructor(private candidateListService: CandidateListService) { }

  ngOnInit(): void {
   this.getCandidates();
  }

  private getCandidates(){
    this.candidateListService.getCandidateList().subscribe(data => {
      this.candidate = data;
    })
  }
}
