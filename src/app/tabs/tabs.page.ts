import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
role:any
boss!:boolean
trasporter!:boolean
lookingfor:any
trucks:any
loads:any
fleet:any
  constructor() {}
  ngOnInit(): void {
  this.role=  JSON.parse( localStorage.getItem('loginrole') || "{}")
  this.lookingfor =  JSON.parse( localStorage.getItem('lookingfor') || "{}")
  console.log(this.lookingfor)
  console.log(this.role)
  this.hide()
  this.transporter()
  this.looking()
  this.lookings()
  }

  hide(){
    if(this.role === 'Shipper'){
      this.boss = true
    }else{
      this.boss =false
    }
  }

  transporter(){
    if(this.role === 'Transporter'){
      this.trasporter = true
    }else if(this.role === 'Agent/Broker'){
      this.trasporter =true
    }else{
      this.trasporter=false
    }
  }
  looking(){
    if(this.lookingfor === 'trucks'){
      this.trucks = true
    }else{
      this.trucks =false
    }
  }

  lookings(){
    if(this.lookingfor === 'loads'){
      this.loads = true
    }else{
      this.loads =false
    }
  }
  fleetowner(){
    if(this.role === 'Fleet Owner'){
      this.fleet = true
    }else{
      this.fleet =false
    }
  }

}
