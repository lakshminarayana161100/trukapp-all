import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytrucks',
  templateUrl:'./mytrucks.page.html' ,
  styleUrls: ['./mytrucks.page.scss'],
})
export class MytrucksPage implements OnInit {

  item:any = [];
  TurkActive:any;
_id:any;
  vehiclenumber:any;
  capacity:any;
  data:any;
  currentLocation:any;
  operatingRoutes:any;
  isActive:any
  products: any;


  constructor() {}


  ngOnInit():void{
    this.get()
    
  }
  get() {
    fetch("https://amused-crow-cowboy-hat.cyclic.app/addTruk/allVehicles", {
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



  SendData(data:any){
    console.log(data)
    localStorage.setItem("TrukPosted", JSON.stringify(data));
    //The localStorage object allows you to save key/value pairs in the browser.
  }



  // Isactive Functionality
  isactive(Data:any){
    console.log(Data._id)
    var data={
      isActive:"Deactive"
    }
   // console.log(data)

    
    fetch("https://amused-crow-cowboy-hat.cyclic.app/addTruk/TrukDeactive/" + Data._id, {
      method: 'PUT',
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data),        // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
        
          this.products = JSON.parse(result)  //it  runs $parse automatically when it runs the $digest loop, basically $parse is the way angular evaluates expressions

     
        //window.location.reload()  // reloading window

      }

      ).catch(err =>
        console.log(err))
  }

  deleteTruk(id: any) {
    fetch("https://amused-crow-cowboy-hat.cyclic.app/addTruk/deleteTruk/" + id, {
      method: 'DELETE',
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type": 'text/plain'

      },


    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.get()
      }

      ).catch(err =>
        console.log(err))
        
  }


  toggle(isActive:any){
    this.TurkActive=isActive
    this.Truk()
console.log(isActive)
  }

  Truk(){
    console.log(this.TurkActive)
    fetch("https://amused-crow-cowboy-hat.cyclic.app/addTruk/trukByStatus/" + this.TurkActive, {
      method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",

      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.item = result.vehicle
         console.log(this.item)
      }

      ).catch(err =>
        console.log(err))
  }

}
