import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personorcompanydetails',
  templateUrl: './personorcompanydetails.page.html',
  styleUrls: ['./personorcompanydetails.page.scss'],
})
export class PersonorcompanydetailsPage implements OnInit {
  segmentValue = '1';
  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event:any) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }

}
