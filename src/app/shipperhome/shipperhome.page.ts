import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { reload } from 'firebase/auth';
@Component({
  selector: 'app-shipperhome',
  templateUrl: './shipperhome.page.html',
  styleUrls: ['./shipperhome.page.scss'],
})
export class ShipperhomePage implements OnInit {
  bannerImages:any
  slide:any
  adsarray:any=[]
  logindata:any
   // variables
    slideOpt = {
    slidesPerView: 3
  }
   buttonSlide = {
    slidesPerView: 5
  }
   verticalSlide = {
    initialSlide: 0,
    direction: 'vertical',
    slidesPerView: 1.5,
  }
// set app banner slides
slideOpts = {
  initialSlide: 0,
  speed: 200,
  loop: true,
  
  
  autoplay: {
    delay: 1900,
    disableOnInteraction: false,
  }
};

option = {
  slidesPerView: 1.5,
  //centeredSlides: true,
  loop: true,
  spaceBetween: 4,
  // autoplay:true,
}
  constructor() { }

  ngOnInit() {
    this.logindata=  JSON.parse(localStorage.getItem('regdata')|| '{}')
    console.log(this.logindata)
    /*this.http.get('http://localhost:3000/images').subscribe(images => {
      console.log(images)
      this.bannerImages = images;
    });*/

    fetch("http://localhost:3000/truckinfo/gethome",{
      //fetch("https://api.emptra.com/aadhaarVerification/requestOtp", {
        
        method:'get',
        headers:{
                  "Access-Control-Allow-Origin": "*",
              
                },
      
        }).then(res => res.json())
        
        .then(
          async result =>{
            this.slide=result
          
       console.log(result)
       for(let i=0;i<result.data.length;i++){
        this.adsarray=result.data[i]
        console.log(this.adsarray)
       }
      
          })
        
  }
  looking(data:any){
    console.log(data)
    localStorage.setItem('lookingfor',JSON.stringify(data))
    

  }

  /*bannerImages = [
    {
      imgurl: 'https://th.bing.com/th?id=OIP.mDbUajyLNzxCJkZJTw-ysgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    }, {
      imgurl: 'https://th.bing.com/th?id=OIP.mDbUajyLNzxCJkZJTw-ysgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    }, {
      imgurl: 'https://th.bing.com/th?id=OIP.mDbUajyLNzxCJkZJTw-ysgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    },
    {
      imgurl: 'https://th.bing.com/th?id=OIP.mDbUajyLNzxCJkZJTw-ysgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    },
    {
      imgurl: 'https://th.bing.com/th?id=OIP.mDbUajyLNzxCJkZJTw-ysgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    }
  ];*/

}
