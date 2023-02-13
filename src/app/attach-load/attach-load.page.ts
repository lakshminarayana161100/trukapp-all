import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.get()

  }


  out(data: any) {
    console.log(data)
    this.get()
    this.data = data

  }
  get() {
    fetch("http://localhost:3000/quotes/allQuotes", {
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

  sendData(data:any){
    console.log(data)
    localStorage.setItem("attachload", JSON.stringify(data));
    //The localStorage object allows you to save key/value pairs in the browser.
  }
}
