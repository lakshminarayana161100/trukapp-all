import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss'],
})
export class PersonaldetailsComponent implements OnInit {
firstName:any
lastName:any
ReferalCode:any
city:any
  constructor(private router:Router) { }

  ngOnInit() {}

  RegisterFor(){
    const individual={
      firstName:this.firstName,
      lastName:this.lastName,
      ReferalCode:this.ReferalCode,
      city:this.city,
      companyName:null
    }
    localStorage.setItem('allDetails',JSON.stringify(individual))
this.router.navigate(['signup'])
  }
}
