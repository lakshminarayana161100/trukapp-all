import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 
  segmentValue='1';
  item: any = [];    //Storing the items data in the array
  isactive:any;
body={
  OriginLocation:'',
  DestinationLocation:'',
  date: '',
  vehicle: '',
  product: '',
  Quantity: '',

  expectedPrice: '',
  tonnes:'',
  Number:'',
  loadCapacity:'',

  typeOfPay:'',
  comments:'',
  length:'',
  breadth:'',
  height:''
}
  real: any;
  products: any;
  _id: any;
  load:any
  isActive:any;
  Id:any
  logindata: any;

  constructor(private router:Router,public loadingController: LoadingController) {}

  

  segmentChanged(event:any) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }


  ngOnInit():void{
    
   this.toggle(this.isActive="Active")
   this.logindata =JSON.parse(localStorage.getItem('regdata')||'{}')
   console.log(this.logindata)
  }
  async get() {
    const loading = await this.loadingController.create({
      message: 'Verifying...',
      spinner: 'crescent'
    });
    await loading.present();
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
         loading.dismiss()
      }

      ).catch(err =>{
        loading.dismiss()
        console.log(err)})
  }


  sendData(data:any){
     console.log(data._id)
     localStorage.setItem("currentSelectedLoad",JSON.stringify(data));
  }



// Isactive Functionality
  async Isactive(docData:any){
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'crescent'
    });
    await loading.present();
    var data={
      isActive:"Deactive"
    }
   // console.log(data)

    console.log(docData)
    fetch("https://amused-crow-cowboy-hat.cyclic.app/postLoad/loadDeactivate/" + docData._id, {
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

          this.products = result //it  runs $parse automatically when it runs the $digest loop, basically $parse is the way angular evaluates expressions
loading.dismiss()
     
        window.location.reload()  // reloading window

      }

      ).catch(err =>{
        loading.dismiss()
        console.log(err)})
  }

  loadDetails(load: any) {
    //   console.log(load)
      localStorage.setItem("loadDetails", JSON.stringify(load));
      this.router.navigate(["load-details"])
     }

     bidById(bid: any) {
      //   console.log(load)
        localStorage.setItem("viewBid", JSON.stringify(bid));
        this.router.navigate(["all-bids"])
       }

 
       toggle(isActive:any){
        this.isactive=isActive
        this.activeGet()
        console.log(isActive)
       }
       toggles(isActive:any){
        this.isactive=isActive
        this.deActiveGet()
        console.log(isActive)
       }
       toggless(isActive:any){
        this.isactive=isActive
        this.completedGet()
        console.log(isActive)
       }

       async activeGet(){
        const loading = await this.loadingController.create({
          message: 'Loading...',
          spinner: 'crescent'
        });
        await loading.present();
        console.log(this.isactive)
        var body={
          Number: "7981869868", isActive:"Active" 
        }
    fetch("https://amused-crow-cowboy-hat.cyclic.app/quotes/loadsByStatusAndNumber" , {
      method: 'POST',
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.item = result.load
         console.log(this.item)
         loading.dismiss()
      }

      ).catch(err =>{
        loading.dismiss()
        console.log(err)})
  }



  
  async deActiveGet(){
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'crescent'
    });
    await loading.present();
    console.log(this.isactive)
    var body={
      Number: "7981869868", isActive:"Deactive" 
    }
fetch("https://amused-crow-cowboy-hat.cyclic.app/quotes/loadsByStatusAndNumber" , {
  method: 'POST',
  headers: {
    "access-Control-Allow-Origin": "*",
    "Content-Type": 'application/json'
  },
  body: JSON.stringify(body),
})
  .then(response => response.json())
  .then(result => {
    console.log(result),
      this.item = result.load
     console.log(this.item)
     loading.dismiss()
  }

  ).catch(err =>{
    loading.dismiss()
    console.log(err)
  })
}



  async completedGet(){
  const loading = await this.loadingController.create({
    message: 'Loading...',
    spinner: 'crescent'
  });
  await loading.present();
  console.log(this.isactive)
  var body={
    Number: "7981869868", isActive:"Completed" 
  }
fetch("https://amused-crow-cowboy-hat.cyclic.app/quotes/loadsByStatusAndNumber" , {
method: 'POST',
headers: {
  "access-Control-Allow-Origin": "*",
  "Content-Type": 'application/json'
},
body: JSON.stringify(body),
})
.then(response => response.json())
.then(result => {
  console.log(result),
    this.item = result.load
   console.log(this.item)
   loading.dismiss()
}

).catch(err =>{
  loading.dismiss()
  console.log(err)
})
}
}
