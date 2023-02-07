import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss'],
})
export class PersonaldetailsComponent implements OnInit {
FirstName:any
LastName:any
ReferalCode:any
city:any
  constructor(private router:Router) { }

  ngOnInit() {}

  RegisterFor(){
    const individual={
      FirstName:this.FirstName,
      LastName:this.LastName,
      ReferalCode:this.ReferalCode,
      city:this.city,
      companyName:null
    }
    localStorage.setItem('allDetails',JSON.stringify(individual))
this.router.navigate(['signup'])
  }
}
