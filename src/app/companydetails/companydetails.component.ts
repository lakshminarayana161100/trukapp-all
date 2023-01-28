import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.scss'],
})
export class CompanydetailsComponent implements OnInit {
  FirstName:any
  LastName:any
  ReferalCode:any
  companyName:any
  city:any
  constructor(private router:Router) { }

  ngOnInit() {}
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
}
