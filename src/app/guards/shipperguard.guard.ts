import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipperguardGuard implements CanActivate {
  logindata:any
  constructor(private router :Router){
    this.logindata=  JSON.parse(localStorage.getItem('regdata')|| '{}')
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.logindata.role === 'Shipper'){
        this.router.navigate(['tab/tab1'])
        
        return true
        
        
       
      }else{
        alert('login as a Shipper to Access')
        this.router.navigate(['page-not-found'])
        return false
       
      }
    
  }
  
}
