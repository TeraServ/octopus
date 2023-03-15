import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { calendar } from 'src/app/models/calendar.model';

import { user } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { EventService } from 'src/app/service/event.service';
import { UserService } from 'src/app/service/user.service';
import { EventService } from 'src/app/service/event.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  
  
})
export class CalendarComponent implements OnInit {
 
  eventList: any;


  constructor(private  _eventService:EventService,private userService:UserService,private authService:AuthService) { }

  constructor(private  _eventService:EventService) { }


  ngOnInit(): void {
   
    this.renderCalendar();
    this.eventListener();

    this.getCurrentUser()

   
  }
 


// daysTag = document.querySelector(".days");
// currentDate = document.querySelector(".current-date");

@ViewChild('days') daysTag!:ElementRef; 

@ViewChild('currentdate') currentDate!:ElementRef;

isOpened = false;
prevNextIcon = document.querySelectorAll(".icons span");
aboveTemplate = `<div class="color-red">Top Template<button style="background: white; color: black">Press me</button></div>`;
// getting new date, current year and month
date:Date = new Date();
currYear = this.date.getFullYear();
currMonth = this.date.getMonth();
liTag:calendar[]=[];
currentUser!:user;

// storing full name of all months in array
months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];


  
  getCurrentUser(){
    
    const authUser = JSON.parse(this.authService.currentUserValue())
    this.userService.getUserByEmail(authUser.username).subscribe(data=>{
      this.currentUser =  data;
    })

  }
              
renderCalendar()  {
    let firstDayofMonth = new Date(this.currYear, this.currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(this.currYear, this.currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(this.currYear, this.currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(this.currYear, this.currMonth, 0).getDate(); // getting last date of previous month
    

    for (let i = firstDayofMonth; i > 0; i--) { 
      // creating li of previous month last days

      let data:calendar = {
        date:lastDateofLastMonth - i + 1,
        className: "inactive"
      }
      this.liTag.push(data)
     //   this.liTag += ;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === this.date.getDate() && this.currMonth === new Date().getMonth() 
                     && this.currYear === new Date().getFullYear() ? "active" : "";

                     let data:calendar = {
                      date: i ,
                      className: `${isToday}`
                    }
                    this.liTag.push(data)
        // this.liTag.push(`<li class="${isToday}">${i}</li>`);
    }
    
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
      let data:calendar = {
        date: i - lastDayofMonth + 1,
        className: `inactive`
      }
      this.liTag.push(data)
        // this.liTag.push(`<li class="inactive">${i - lastDayofMonth + 1}</li>`);
    }
   // console.log(this.liTag)
    // this.currentDate.nativeElement.innerHTML = `${this.months[this.currMonth]} ${this.currYear}`; // passing current mon and yr as currentDate text
    // this.daysTag.nativeElement.innerHTML = this.liTag;
}
changeMonth(button:number){
// adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    this.currMonth = button === 0 ? this.currMonth - 1 : this.currMonth + 1;
    if(this.currMonth < 0 || this.currMonth > 11) { // if current month is less than 0 or greater than 11
        // creating a new date of current year & month and pass it as date value
        this.date = new Date(this.currYear, this.currMonth, new Date().getDate());
        this.currYear = this.date.getFullYear(); // updating current year with new date year
        this.currMonth = this.date.getMonth(); // updating current month with new date month
    } else {
        this.date = new Date(); // pass the current date as date value
    }
    this.liTag = [];

    this.renderCalendar();
    this.eventListener();
     // calling renderCalendar function
}
eventListener(){
  this._eventService.getEventList().subscribe(data=>{
    this.eventList = data;
    this.eventList.forEach(v=>{
      console.log(new Date(v.start).getMonth()+1)

      if(new Date(v.start).getMonth() == this.currMonth && this.checkUser(v.team_members,this.currentUser)){
        this.liTag.forEach((v2,i)=>{
          if(new Date(v.start).getDate() == v2.date && v2.className != "inactive"){
            this.liTag[i].className = " EventStart";
            this.liTag[i].data = v;
            
          }else if(new Date(v.end).getDate() == v2.date && v2.className != "inactive"){
            this.liTag[i].className = " EventEnd";
            this.liTag[i].data = v;
          }
        })
      }
    })
  
  })
}

checkUser(eventData:[],userData):boolean{
  let count:number= 0;
  eventData.filter((v:any,i)=>{
     console.log(v.email == userData.email)
     if(v.email == userData.email){
      count++;
     }
  })
 if(count >0){
  return true;
 }else{
  return false;
 }
}




    this.renderCalendar();
    this.eventListener();
     // calling renderCalendar function
}
eventListener(){
  this._eventService.getEventList().subscribe(data=>{
    this.eventList = data;
    this.eventList.forEach(v=>{
      console.log(new Date(v.start).getMonth()+1)

      if(new Date(v.start).getMonth() == this.currMonth ){
        this.liTag.forEach((v2,i)=>{
          if(new Date(v.start).getDate() == v2.date && v2.className != "inactive"){
            this.liTag[i].className = " EventStart";
            this.liTag[i].data = v.type
          }else if(new Date(v.end).getDate() == v2.date && v2.className != "inactive"){
            this.liTag[i].className = " EventEnd";
            this.liTag[i].data = v.type
          }
        })
      }
    })
  
  })
}

}
