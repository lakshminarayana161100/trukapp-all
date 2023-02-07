import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
otp:any
  constructor() { }
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
  ngOnInit() {
  }

  onOtpChange(otp: string) {
    this.otp = otp;
  }
verify(){
  

const final ={
  uid:'882379973168',

}
console.log(final)
fetch("http://developer.uidai.gov.in/otp",{
    //fetch("https://api.emptra.com/aadhaarVerification/requestOtp", {
      
      method:'post',
      headers:{
                "Access-Control-Allow-Origin": "*",
                  "Content-Type":'application/json',
                  "clientId":'5dc2b803f081c9ce6689a172710646c1:43b3e80716110f92d31e0dbd5119a6d3',
                  "secretKey":'Jj95NQ1exdMSjCenc5IMBJz4tbtmaEy9uFWwdEJJMhBgQHefkv5yrPWf8rPp046UQ'
              },
      body:JSON.stringify(final),
      }).then(res => res.json())
      
      .then(
        result =>{
     console.log(result)
     var sai =result
        console.log(result.result.data.client_id)
       localStorage.setItem("client_id",JSON.stringify(result.result.data.client_id))
        
      
        }
        ).catch(
            error =>{
              alert('Enter valid AadharNumber');
             console.log(error)
            });
          
  
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
              "clientId":'5dc2b803f081c9ce6689a172710646c1:43b3e80716110f92d31e0dbd5119a6d3',
              "secretKey":'Jj95NQ1exdMSjCenc5IMBJz4tbtmaEy9uFWwdEJJMhBgQHefkv5yrPWf8rPp046UQ'
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
    }
    
  
    }
    ).catch(
        error =>{
          alert('Enter valid OTP');
         console.log(error)
        });
      

}
}
