import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoggeduserGuard implements CanActivate {
  logindata: any;
  constructor(private router :Router){
    this.logindata=  JSON.parse(localStorage.getItem('regdata')|| '{}')
  }
  canActivate() {
    if( this.logindata.role === 'Shipper'){
      this.router.navigate(['tab/tab1'])
      return true
    } else if( this.logindata.role === 'Transporter' || 'Fleet Owner' || 'Agent/Broker'){
      this.router.navigate(['shipperhome'])
      return true
    }
    return true;
  }
  
}
