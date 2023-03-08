import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  FormGroup, Validators,FormControl } from '@angular/forms';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { LoadingController ,NavController} from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm!:FormGroup 
  allDetails:any
  role:any
  UniqueDeviceID!:string;
  final: any;
  aboutCompany:any


  constructor(private router:Router,private uniqueDeviceID: UniqueDeviceID,public loadingController: LoadingController,public navController:NavController) { }

  ngOnInit() {
    
    this.getUniqueDeviceID();
   this.role = JSON.parse(localStorage.getItem('selectType') || '{}')
   var lang= JSON.parse(localStorage.getItem('language') || '{}') 
    this.allDetails =JSON.parse(localStorage.getItem('allDetails') || '{}') 
  
console.log(this.allDetails)

   this.signupForm= new FormGroup ({
    'firstName': new FormControl('', [Validators.required]),
    'lastName': new FormControl('', [Validators.required]),
    'city': new FormControl('', [Validators.required]),
    'companyName': new FormControl('', [Validators.required]),
    'routes': new FormControl('', [Validators.required]),
    'mobileNo': new FormControl( Number, [Validators.required, ]),
    'aboutCompany': new FormControl('', [Validators.required]),
  });

  console.log(this.signupForm.value.mobileNo)
  }

  

  getUniqueDeviceID() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        console.log(uuid);
        this.UniqueDeviceID = uuid;

        //alert(this.UniqueDeviceID)
      })
      .catch((error: any) => {
        console.log(error);
        this.UniqueDeviceID = "Error! ${error}";
      });
  }

  async onSubmit(data:any){
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'crescent'
    });
    await loading.present();
    
console.log(data)

 this.final ={
  
  firstName:data.firstName,
   lastName:data.lastName,
   mobileNo:data.mobileNo,
   city:data.city,
   companyName:data.companyName,
  role:this.role,
   uniqueDeviceId:this.UniqueDeviceID,
   routes:data.routes,
   aboutCompany:this.aboutCompany
}
 console.log(this.final)
if(data.firstName != '' && data.firstName != '' && data.lastName != '' && data.mobileNo != '' && data.city != '' && data.companyName != '' && data.routes != '' && this.aboutCompany != undefined){

    fetch("https://amused-crow-cowboy-hat.cyclic.app/TruckAppUsers/signup", {
      
      method:'post',
      headers:{
                "Access-Control-Allow-Origin": "*",
                  "Content-Type":'application/json'
              },
      body:JSON.stringify(this.final),
      }).then(res => res.json())
      
      .then(
        result =>{
     
          if(result.status === "failed" ){
            loading.dismiss();
            alert("Already registered please login")
            //this.router.navigate(['/loginotp'])
            this.navController.navigateForward('/loginotp');
            }else if(result.status === "faileds"){
              loading.dismiss();
              alert('something went wrong')
            }
            else{
              loading.dismiss();
              alert('Your account is registered')
              this.navController.navigateForward('/loginotp');
              //this.router.navigate(['/loginotp'])

            }
        
        
      
        }
        ).catch(
            error =>{
              loading.dismiss();
              alert('register not  successfull');
             console.log(error)
             
            });
}else{
  loading.dismiss()
  alert('Enter all details')
}
  
  }

}
