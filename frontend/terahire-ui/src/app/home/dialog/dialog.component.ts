import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CandidateService } from 'src/app/service/candidate.service';



export interface DialogData{
  id:number,
  message:string
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
 
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private candidateService: CandidateService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteCandidate(id: number) {
    
      this.candidateService.deleteCandidate(id).subscribe(data => {
        console.log(data);
        
      })
   
    window.location.reload();

  }
}
