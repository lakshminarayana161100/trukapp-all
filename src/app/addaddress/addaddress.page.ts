import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl,NgControl } from '@angular/forms';
@Component({
  selector: 'app-addaddress',
  templateUrl: './addaddress.page.html',
  styleUrls: ['./addaddress.page.scss'],
})
export class AddaddressPage implements OnInit {
  signupForm!:FormGroup
  logindata:any 
  constructor(private router:Router) { }

  ngOnInit() {
    this.logindata=  JSON.parse(localStorage.getItem('regdata')|| '{}')
    console.log(this.logindata.Authentication)
    this.signupForm= new FormGroup ({
    
      'addressType': new FormControl('', [Validators.required]),
      'doorNo': new FormControl('', [Validators.required]),
   
      'areaName': new FormControl('', [Validators.required, ]),
      'landMark': new FormControl('', [Validators.required, ]),
      'city': new FormControl('', [Validators.required, ]),
      'pincode': new FormControl('', [Validators.required, ]),
    });
  }
Addaddress(data:any){
  console.log(data)
  console.log(this.logindata)
  fetch("http://localhost:3000/TruckAppUsers/putprofile/" +this.logindata.Authentication, {
      
  method:'put',
  headers:{
            "Access-Control-Allow-Origin": "*",
              "Content-Type":'application/json'
          },
  body:JSON.stringify(data),
  }).then(res => res.json())
  
  .then(
    result =>{
 console.log(result)
    this.router.navigate(['profile'])
    
    
  
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
