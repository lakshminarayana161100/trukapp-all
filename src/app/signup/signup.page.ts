import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl,NgControl } from '@angular/forms';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
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
  constructor(private router:Router,private uniqueDeviceID: UniqueDeviceID,) { }

  ngOnInit() {
    this.getUniqueDeviceID();
   this.role = JSON.parse(localStorage.getItem('selectType') || '{}')
   var lang= JSON.parse(localStorage.getItem('language') || '{}') 
    this.allDetails =JSON.parse(localStorage.getItem('allDetails') || '{}') 
  
console.log(this.allDetails)

   this.signupForm= new FormGroup ({
    
    'userName': new FormControl('', [Validators.required]),
    //'lastName': new FormControl('', [Validators.required]),
 
    mobileNo: new FormControl( Number, [Validators.required, ]),
  });
  }
  getUniqueDeviceID() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        console.log(uuid);
        this.UniqueDeviceID = uuid;

        alert(this.UniqueDeviceID)
      })
      .catch((error: any) => {
        console.log(error);
        this.UniqueDeviceID = "Error! ${error}";
      });
  }

  onSubmit(data:any){
    
console.log(data)

const final ={
  userName:data.userName,
  firstName:this.allDetails.firstName,
  lastName:this.allDetails.lastName,
  mobileNo:data.mobileNo,
  city:this.allDetails.city,
  companyName:this.allDetails.companyName,
  role:this.role,
  uniqueDeviceId:this.UniqueDeviceID
}
console.log(final)
    fetch("https://amused-crow-cowboy-hat.cyclic.app/TruckAppUsers/signup", {
      
      method:'post',
      headers:{
                "Access-Control-Allow-Origin": "*",
                  "Content-Type":'application/json'
              },
      body:JSON.stringify(final),
      }).then(res => res.json())
      
      .then(
        result =>{
     
          if(result.status === "failed" ){
            alert("Already registered please login")
            this.router.navigate(['/loginotp'])
            }else if(result.status === "faileds"){
              alert('something went wrong')
            }
            else{
              alert('Your account is registered')
              this.router.navigate(['/loginotp'])
            }
        
        
      
        }
        ).catch(
            error =>{
              alert('register not  successfull');
             console.log(error)
            });
            // localStorage.removeItem('selectType');
             //localStorage.removeItem('language');
            // localStorage.removeItem('allDetails');
             //localStorage.removeItem('mobileNo');
  
  }

}
