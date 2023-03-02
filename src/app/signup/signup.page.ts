import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators,FormControl,NgControl } from '@angular/forms';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { LoadingController } from '@ionic/angular';

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


  dropdownList:any[]= [];
  selectedItems:any= [];
  dropdownSettings!: IDropdownSettings;
  constructor(private router:Router,private uniqueDeviceID: UniqueDeviceID,public loadingController: LoadingController) { }

  ngOnInit() {
    
    this.getUniqueDeviceID();
   this.role = JSON.parse(localStorage.getItem('selectType') || '{}')
   var lang= JSON.parse(localStorage.getItem('language') || '{}') 
    this.allDetails =JSON.parse(localStorage.getItem('allDetails') || '{}') 
  
console.log(this.allDetails)

   this.signupForm= new FormGroup ({
    
    'userName': new FormControl('', [Validators.required]),
  'routes': new FormControl('', [Validators.required]),
 
    mobileNo: new FormControl( Number, [Validators.required, ]),
  });

  this.dropdownList = [
    'Andaman and Nicobar Islands' ,
    'Andhra Pradesh' ,
     'Arunachal Pradesh' ,
   'Assam' ,
  'Bihar' ,
     'Chandigarh' ,
     'Chhattisgarh' ,
   'Dadra Nagar Haveli and Daman Diu' ,
     'Goa' ,
   'Gujarat' ,
     'Haryana' ,
      'Himachal Pradesh' ,
      'Jammu and Kashmir' ,
   'Jharkhand' ,
      'Karnataka' ,
      'Kerala' ,
      'Lakshadweep' ,
      'Ladakh' ,
      'Madhya Pradesh' ,
      'Maharashtra' ,
      'Manipur' ,
      'Meghalaya' ,
      'Mizoram' ,
      'Nagaland' ,
      'National Capital Territory (Delhi)' ,
      'Odisha' ,
      'Puducherry' ,
      'Punjab' ,
      'Rajasthan' ,
      'Tamil Nadu' ,
     'Telangana' ,
      'Tripura' ,
      'Uttar Pradesh' ,
      'Uttarakhand' ,
      'West Bengal' ,
  
  ];
  this.selectedItems = [
   
  ];
  
  this.dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: '',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  }

  
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
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

const final ={
  userName:data.userName,
  firstName:this.allDetails.FirstName,
  lastName:this.allDetails.LastName,
  mobileNo:data.mobileNo,
  city:this.allDetails.city,
  companyName:this.allDetails.companyName,
  role:this.role,
  uniqueDeviceId:this.UniqueDeviceID,
  routes:data.routes
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
            loading.dismiss();
            alert("Already registered please login")
            this.router.navigate(['/loginotp'])
            }else if(result.status === "faileds"){
              loading.dismiss();
              alert('something went wrong')
            }
            else{
              loading.dismiss();
              alert('Your account is registered')
              
              this.router.navigate(['/loginotp'])

            }
        
        
      
        }
        ).catch(
            error =>{
              loading.dismiss();
              alert('register not  successfull');
             console.log(error)
             
            });
            // localStorage.removeItem('selectType');
             //localStorage.removeItem('language');
            // localStorage.removeItem('allDetails');
             //localStorage.removeItem('mobileNo');
  
  }

}
