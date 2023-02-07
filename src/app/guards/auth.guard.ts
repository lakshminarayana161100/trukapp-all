import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  num:any
  constructor(private router :Router){
    this.num =localStorage.getItem('mobileNo')
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
  
  
 
}else{

  return true
 
}
    return true;
  }
  
}
