import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';

const { Storage } = Plugins;

const TOKEN_KEY = 'user-token';

export interface User {
  name: string;
  role: string;
  permissions: string[];
}
export interface User{
  
  selectType: string;  // Coach or Client
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
}
