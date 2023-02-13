import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  num:any
  logindata:any
  constructor(private router :Router){
    this.num =localStorage.getItem('mobileNo')
    this.logindata=  JSON.parse(localStorage.getItem('regdata')|| '{}')
  }

  /*IsLoggedIn(){
    return !!localStorage.getItem('mobileNo')
  }*/
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

         
if(this.num === null){
  this.router.navigate(['loginotp'])
  alert('Please login to access')
  return false
  
  
 
}else if(this.logindata.role === 'Shipper'){
  this.router.navigate(['/tab/tab1'])

  return true
 
}else if(this.logindata.role === 'Agent/Broker'){
  this.router.navigate(['/tab/shipperhome'])

  return true
 
}else if(this.logindata.role === 'Transporter'){
  this.router.navigate(['/tab/shipperhome'])

  return true
 
}else if(this.logindata.role === 'Fleet Owner'){
  this.router.navigate(['/tab/shipperhome'])

  return true
 
}
    return true;
  }
  
}
