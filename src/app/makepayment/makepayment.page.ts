import { Component, OnInit } from '@angular/core';
import  firebase from 'firebase/compat/app';
import { AuthpaymentService } from '../authpayment.service';
import 'firebase/compat/auth';
import  'firebase/auth';
import 'firebase/compat/firestore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-makepayment',
  templateUrl: './makepayment.page.html',
  styleUrls: ['./makepayment.page.scss'],
})
export class MakepaymentPage implements OnInit {
  rzp1:any
  bid: any;
  tenPrice: any;
  payingToNmae: any;
  receivemobile: any;
  filname: any;
  array :any =[]
  checkbox =false
  constructor(private auth:AuthpaymentService,private modal:ModalController,private alert:AlertController) { }
  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Alert',
      subHeader: 'payment successful',
      message: 'Payment successful',
      buttons: ['OK'],
      
    });

    await alert.present();
  }
  ngOnInit() {
    this.bid =JSON.parse(localStorage.getItem('filteredBid') || '{}')
    console.log(this.bid)
    for(let i=0;i<this.bid.length;i++){
      this.tenPrice  =this.bid[i].tentativefinalPrice
      this.receivemobile  =this.bid[i].mobileNo
    }

    this.payingToNmae =JSON.parse(localStorage.getItem('regdata') || '{}')
    console.log(this.payingToNmae)
this.array.push(this.payingToNmae)
    this.filname = this.array.filter((data:any)=>{
      console.log(data.mobileNo)
      console.log(this.receivemobile)
     return data.mobileNo === this.receivemobile
    })
    console.log(this.filname)
  }

  options = {
    "key": "rzp_live_W93qXq63hhLhjQ",
    "amount":  100,
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", 
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};

pay(){

  this.rzp1 = new this.auth.nativeWindow().Razorpay(this.options);
   this.rzp1.open()
}
out(paymentmode:any){
console.log(paymentmode)
}
}
