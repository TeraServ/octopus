import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  loadData = false;
  constructor() {

  }

  ngOnInit(): void {
  }

  setData(value) {
    this.loadData = value;
  
  }
}
