import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personorcompanydetails',
  templateUrl: './personorcompanydetails.page.html',
  styleUrls: ['./personorcompanydetails.page.scss'],
})
export class PersonorcompanydetailsPage implements OnInit {
  segmentValue = '2';
  constructor() { }

  ngOnInit() {
   // this.segmentChanged(event:any)
  }

  segmentChanged(event:any) {
    console.log(event);
    //this.segmentValue = event.detail.value;
  
  }

}
