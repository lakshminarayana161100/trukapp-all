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
    console.log(this.logindata)
  }

  IsLoggedIn(){
    return !!localStorage.getItem('regdata')
  }
  canActivate() : boolean{
    if(this.IsLoggedIn()){
      this.router.navigate(['loginotp'])
      return true;
      
     
    }else{
      this.router.navigate(['selectlanguage'])
      
      return false
     
    }
    
  }
  
}
