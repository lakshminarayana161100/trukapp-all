import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lookingfor',
  templateUrl: './lookingfor.page.html',
  styleUrls: ['./lookingfor.page.scss'],
})
export class LookingforPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  looking(data:any){
    console.log(data)
    localStorage.setItem('lookingfor',JSON.stringify(data))

  }
}
