import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-attach-load',
  templateUrl: './attach-load.page.html',
  styleUrls: ['./attach-load.page.scss'],
})
export class AttachLoadPage implements OnInit {

  item: any = [];
  OriginLocation: any;
  DestinationLocation: any;
  date: any;
  data: any;
  expectedPrice: any;
  Quantity: any;
  product: any;
  typeOfPay:any;
  selected:any;
  language:any
  radiovalue:any
  
  

  constructor( private router:Router,public loadingController: LoadingController) { }
  
  ngOnInit() {
    this.get()

  }


  // out(data: any) {
  //   console.log(data)
  //   this.get()
  //   this.data = data

  // }
  get() {
    fetch("https://amused-crow-cowboy-hat.cyclic.app/quotes/allQuotes", {
      method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",

      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.item = result.Loads
        console.log(this.item)
      }

      ).catch(err =>
        console.log(err))
  }

  out(data:any){
    console.log(data)
    //this.language =data
  }

  sendData(data:any){
    console.log(data)
    this.language =data
    localStorage.setItem("attachload", JSON.stringify(data));
    //The localStorage object allows you to save key/value pairs in the browser.
  }

   proceed(){
     this.router.navigate(['attach-existing-loads'])
   }

}
