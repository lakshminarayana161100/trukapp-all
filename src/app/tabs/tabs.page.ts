import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
role:any
boss!:boolean
  constructor() {}
  ngOnInit(): void {
  this.role=  JSON.parse( localStorage.getItem('loginrole') || "{}")
  console.log(this.role)
  this.hide()
  }

  hide(){
    if(this.role === 'Shipper'){
      this.boss = true
    }else{
      this.boss =false
    }
  }

}
