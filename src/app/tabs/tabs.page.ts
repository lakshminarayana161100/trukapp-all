import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
role:any
boss:any
trasporter:any
lookingfor:any
trucks:any
loads:any
fleet:any
  agents: any;
  constructor() {}
  ngOnInit(): void {
  this.role=  JSON.parse( localStorage.getItem('loginrole') || "{}")
  this.lookingfor =  JSON.parse( localStorage.getItem('lookingfor') || "{}")
  console.log(this.lookingfor)
  
  this.hide()
  this.transporter()
  this.looking()
  this.lookings()
  this.agent()
  this.fleetowner()
  }

  hide(){
    if(this.role === 'Shipper'){
      this.boss = 'Shipper'
    }
  }

  transporter(){
    if(this.role === 'Transporter'){
      this.trasporter = 'Transporter'
    }
  }

  agent(){
    if(this.role === 'Agent/Broker'){
      this.agents = 'Agent/Broker'
    }
  }
  looking(){
    if(this.lookingfor === 'trucks'){
      this.trucks = 'trucksop'
    }
  }

  lookings(){
    if(this.lookingfor === 'loads'){
      this.loads = 'loadsop'
    }
  }
  fleetowner(){
    if(this.role === 'Fleet Owner'){
      this.fleet = 'Fleet Owner'
    }
  }

}
