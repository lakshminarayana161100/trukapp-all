import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs';

function _window():any{
  return window;
}
@Injectable({
  providedIn: 'root'
})
export class AuthpaymentService {
  
get nativeWindow():any{
  return _window;
}
  constructor() { }
}
