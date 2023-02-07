import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vrifyaadharotp',
  templateUrl: './vrifyaadharotp.page.html',
  styleUrls: ['./vrifyaadharotp.page.scss'],
})
export class VrifyaadharotpPage implements OnInit {
otp:any;


config = {
  allowNumbersOnly: true,
  length: 6,
  isPasswordInput: false,
  disableAutoFocus: false,
  placeholder: '',
  inputStyles: {
    width: '45px',
    height: '45px',
  },
};
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onOtpChange(otp: string) {
    this.otp = otp;
  }

  
  handleClick(){

    var clientid = localStorage.getItem("client_id")
    console.log(clientid)
      const final ={
        client_id: clientid,
        otp:this.otp
      
      }
      fetch("https://api.emptra.com/aadhaarVerification/submitOtp", {
          
      method:'post',
      headers:{
                "Access-Control-Allow-Origin": "*",
                  "Content-Type":'application/json',
                  "clientId":'773901a84fd7da63fb77100ad2cefcf9:c5ba2d212af3d978c2a857062001a431',
                  "secretKey":'FEwoB08LfXN7ie8m5y1JgQL8TSj0bO6adngxGoa5Yfc4XeXd9Pe3I2VEfGh7ZAap9'
              },
      body:JSON.stringify(final),
      }).then(res => res.json())
      
      .then(
        result =>{
     console.log(result)
        if(result.code === 103){
          alert('OTP is required')
        }else if(result.result.data === null){
              alert('Enter valid OTP')
        }else{
          alert('OTP verified')
          this.router.navigate(['profile'])
        }
        
      
        }
        ).catch(
            error =>{
              alert('Enter valid OTP');
             console.log(error)
            });
          
    
    }
}
