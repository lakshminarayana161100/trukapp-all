import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { threadId } from 'worker_threads';
@Component({
  selector: 'app-editalldetails',
  templateUrl: './editalldetails.page.html',
  styleUrls: ['./editalldetails.page.scss'],
})
export class EditalldetailsPage implements OnInit {
  detailsforEdit:any
  routeDetails:any
  constructor(private route: ActivatedRoute, private fb : FormBuilder,private router:Router) { }
  mobileNo:any
  
  firstName :any
  lastName:  any
  role:  any
  city: any
  companyName:  any

  updatedFormed!:FormGroup

  addressType: any
  doorNo:  any
  areaName: any
  landMark: any
  
  pincode: any

  routes:any

  ngOnInit() {
   this.detailsforEdit=JSON.parse( localStorage.getItem('detailsforEdit') || "{}")
   for(let i=0;i<this.detailsforEdit.routes.length;i++){
      this.routeDetails=this.detailsforEdit.routes[i]
   }
   console.log(this.detailsforEdit)

   console.log(this.detailsforEdit['firstName'])
   this.updatedFormed = this.fb.group({
    mobileNo :[''],
    firstName:[''],
    lastName: [''],
    role:[''],
     city:[],
     companyName:[''],
     addressType:[''],
     doorNo:[''],
     areaName:[''],
     landMark:[''],
     pincode:['']

   })
   console.log(this.updatedFormed)
   console.log(this.updatedFormed.value)
  }

  saveDetails(data:any){
   
    console.log(data)
    fetch("http://localhost:3000/TruckAppUsers/updateprofile/" +this.detailsforEdit._id, {
      
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
  
  this.detailsforEdit['firstName']=result.firstName
         this.detailsforEdit['lastName']=result.lastName
         this.detailsforEdit['mobileNo']=result.mobileNo
         this.detailsforEdit['role']=result.role
         this.detailsforEdit['city']=result.city
         this.detailsforEdit['companyName']=result.companyName
         this.detailsforEdit['addressType']=result.addressType
         this.detailsforEdit['doorNo']=result.doorNo
         this.detailsforEdit['areaName']=result.areaName
         this.detailsforEdit['landMark']=result.landMark
         this.detailsforEdit['pincode']=result.pincode

         localStorage.setItem('regdata',JSON.stringify(this.detailsforEdit))
      
      this.router.navigate(['profile'])
      
    
      }
      ).catch(
          error =>{
            alert('unable update Data');
           console.log(error)
          });
        
  
  }

}
