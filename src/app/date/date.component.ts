import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  message: String;
  constructor() { 
    setInterval( () => {
      let currentDate = new Date();
      this.message = currentDate.toDateString() +' '+ currentDate.toLocaleTimeString();
    } ,1000);
  }

  ngOnInit(): void {
  }

}
