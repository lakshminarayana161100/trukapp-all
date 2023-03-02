import { Component, OnInit ,NgZone } from '@angular/core';
import  firebase from 'firebase/compat/app';
import { AuthpaymentService } from '../authpayment.service';
import 'firebase/compat/auth';
import  'firebase/auth';
import 'firebase/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  rzp1:any
  constructor(private auth:AuthpaymentService,private modal:ModalController,private alert:AlertController,public loadingController: LoadingController) {}

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
  
  }

   options = {
    "key": "rzp_live_W93qXq63hhLhjQ",
    "amount": 100,
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

alerts(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
}

}
