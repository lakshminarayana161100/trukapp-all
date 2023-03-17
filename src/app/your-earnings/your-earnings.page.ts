import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-earnings',
  templateUrl: './your-earnings.page.html',
  styleUrls: ['./your-earnings.page.scss'],
})
export class YourEarningsPage implements OnInit {

  data=false;
  data1=false;
  studends =[
      {
          "phonenumber": "936548754",
          "reward": "₹200",
          "status": "pending"    },
  ]
  constructor() { }

  ngOnInit() {
  }
toggle(){
this.data=true;
this.data1=false;
}
toggle1(){
  this.data=false;
  this.data1=true;
}

}
