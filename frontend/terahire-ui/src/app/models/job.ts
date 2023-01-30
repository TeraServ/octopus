export class Job {
    title:string;
    owner:string;
    stage:number;
    status:string;
    activeCandidates:number;
    droppedCandidates:number;
    summary:string;
    teamID:string;
    scoreCard:number;
    createdDate:string|any;
    modifiedDate:string|any;
    id: string;
    totalNoOfCandidates: any;


    getTotalCandidate():number{ return this.activeCandidates+this.droppedCandidates;}
}
