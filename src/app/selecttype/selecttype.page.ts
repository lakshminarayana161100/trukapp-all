import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-selecttype',
  templateUrl: './selecttype.page.html',
  styleUrls: ['./selecttype.page.scss'],
})
export class SelecttypePage implements OnInit {
type:any
  constructor(private router:Router) { }

  ngOnInit() {
  }

  out(data:any){
    this.type=data
    console.log(data)

  }

  selectType(){
    localStorage.setItem('selectType',JSON.stringify(this.type))
    this.router.navigate(['personorcompanydetails'])

  }

}
