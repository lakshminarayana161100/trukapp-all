import { Component, OnInit ,NgZone } from '@angular/core';
import { LoadingController,ToastController } from '@ionic/angular';
import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import  'firebase/auth';
import 'firebase/compat/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
var config = {
  apiKey: "AIzaSyDM4C1YRZ14Lx_8NzbDnChklv9VInrgUmw",
  authDomain: "otplogin-c4da2.firebaseapp.com",
  projectId: "otplogin-c4da2",
  storageBucket: "otplogin-c4da2.appspot.com",
  messagingSenderId: "783500853422",
  appId: "1:783500853422:web:9b813df9ba59a87c31ad3f",
  measurementId: "G-69272HMPPD"
}
@Component({
  selector: 'app-loginotp',
  templateUrl: './loginotp.page.html',
  styleUrls: ['./loginotp.page.scss'],
})
export class LoginotpPage implements OnInit {
regData:any
  phoneNumber: any;
  reCaptchaVerifier!: any;
  regNumber:any
  num!:Number
  spin!: boolean;
  constructor(private router: Router, private ngZone: NgZone,public loadingCtrl:LoadingController,public toastCtrl:ToastController,private alert:AlertController) {}


  ngOnInit() {
    firebase.initializeApp(config);


  }


  async presentToast(message: any,color: any){
    const toast = await this.toastCtrl.create({
      message:message,
      color:color,
      duration:1000,
      position:"middle"
    });
    toast.present()
  }

//get all register data send otp with verification of old user
getOTP(){
  fetch("http://localhost:3000/TruckAppUsers/getRegisterData", {
    method:'GET',
    headers:{
              "Access-Control-Allow-Origin": "*",
                "Content-Type":'application/json'
            },
    
    }).then(res => res.json())
    
    .then(
      async result =>{
        console.log(result)
    
    this.regData=result.data
 
    console.log(this.regData)
console.log(this.phoneNumber)
 this.regNumber = this.regData.find((t: { mobileNo: any; })=>t.mobileNo == this.phoneNumber);
console.log(this.regNumber)
localStorage.setItem('regdata',JSON.stringify(this.regNumber))
if(this.regNumber.mobileNo == this.phoneNumber){

  this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    'sign-in-button',
    {
      size: 'invisible',
    }
  );
  console.log(this.reCaptchaVerifier);

  console.log(this.phoneNumber);
  firebase
    .auth()
    .signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
    .then((confirmationResult:any) => {
      localStorage.setItem(
        'verificationId',
        JSON.stringify(confirmationResult.verificationId)
      );
      localStorage.setItem(
        'mobileNo',
        JSON.stringify(this.phoneNumber)
      );
  
        this.ngZone.run(() => {
          this.router.navigate(['/verifyotp']);
        });
      
    
    })
    .catch((error:any) => {
      console.log(error.message);
      alert(error.message);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    });

}else{
  
    //this.loadingCtrl.dismiss();
    const alert = await this.alert.create({
      header: 'Alert',
      subHeader: 'Your Number is Not Registered',
      message: 'Please Follow these steps',
      buttons: ['OK'],
    });

    await alert.present();
  
      //this.presentToast("Not Registered","danger");
      this.router.navigate(['/selecttype'])
 
  
}
      }).catch(async error =>{
        
         // this.loadingCtrl.dismiss();
        
         const alert = await this.alert.create({
          header: 'Alert',
          subHeader: 'Your Number is Not Registered',
          message: 'Please Follow these steps',
          buttons: ['OK'],
          
        });
       
        await alert.present();
       this.router.navigate(['/selecttype']) 
         
              
            
       /*setTimeout(() => {
        this.spin=false
        this.ngZone.run(() => {
          this.router.navigate(['/selecttype']);
        });
      }, 2000);*/
        
       
      
         console.log(error)
        });
}


}

