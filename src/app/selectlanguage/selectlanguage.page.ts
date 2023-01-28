import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-selectlanguage',
  templateUrl: './selectlanguage.page.html',
  styleUrls: ['./selectlanguage.page.scss'],
})
export class SelectlanguagePage implements OnInit {
  language:any
  radiovalue:any
  constructor(private router:Router) { }
disabled=true
  ngOnInit() {
    console.log(this.language)
  }


  out(data:any){
    console.log(data)
    this.language =data
  }
  selectlanguage(){
 
      
    localStorage.setItem('language',JSON.stringify(this.language))
    this.router.navigate(['loginotp'])

    

  }
}
