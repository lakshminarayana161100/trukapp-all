import { Component } from '@angular/core';

import {  OnInit, NgZone } from '@angular/core';
import 'firebase/compat/auth';
import  'firebase/auth';
import 'firebase/compat/firestore';
import  firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  item: any = [];    //Storing the items data in the array


  OriginLocation:any;
  DestinationLocation: any;
  date: any;
  vehicle: any;
  product: any;
  Quantity: any;
  expectedPrice: any;
  searchtext:any;
  AttendenceArray: any;
  tabkey: any;
  tabValue: any;

  getData(){
    this.AttendenceArray.forEach((element:any)=>{
      this.tabkey=Object.keys(element);
      this.tabValue?.push(Object.values(element));
    });
    console.log(this.getData)
    }

  constructor() {}
  ngOnInit():void{
    this.get()
  }
  get() {
    fetch("http://localhost:3000/quotes/allLoads", {
      method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",

      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.item = result.Load
         console.log(this.item)
      }

      ).catch(err =>
        console.log(err))
  }



 
autorefresh(event:any){
  this.get()
  setTimeout(() => {
    event.target.complete()
  }, 2000);
}

 /* if(this.otp ==this.verify){
    this.presentToast("OTP Verified","success");
  }else{
    this.presentToast("Invalid OTP","danger");
  }*/



 
}
