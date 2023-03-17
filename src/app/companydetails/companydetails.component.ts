import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
declare var google :any;
import { CommonServiceService } from '../common-service.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators,FormControl,NgControl } from '@angular/forms';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.scss'],
})
export class CompanydetailsComponent implements OnInit {
  @ViewChild('map', { static: false }) mapElement: any;
  FirstName:any
  LastName:any
  ReferalCode:any
  companyName:any
  city:any
  dropdownList:any[]= [];
  selectedItems:any= [];
  dropdownSettings!: IDropdownSettings;
  UniqueDeviceID!:string;
  location: any;
  constructor(private router:Router,private uniqueDeviceID: UniqueDeviceID,public loadingController: LoadingController,private commonService:CommonServiceService) { }
  signupForm!:FormGroup 
  ngOnInit() {
    this.signupForm= new FormGroup ({
      'firstName': new FormControl('', [Validators.required]),
       'lastName': new FormControl('', [Validators.required]),
      'city': new FormControl('', [Validators.required]),
       'companyName': new FormControl('', [Validators.required]),
      'ReferalCode': new FormControl('', [Validators.required]),
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

 



  RegisterFor(){
    const companyDetails={
      FirstName:this.FirstName,
      LastName:this.LastName,
      ReferalCode:this.ReferalCode,
      city:this.city,
      companyName:this.companyName
    }
    localStorage.setItem('allDetails',JSON.stringify(companyDetails))
    this.router.navigate(['signup'])
      }

      loac(){
        this.commonService.getLocation().subscribe((response)=>{
          console.log(response);
          this.location = response;
        })
      }
}
