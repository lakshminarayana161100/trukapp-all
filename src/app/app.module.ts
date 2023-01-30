import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import  {FormsModule} from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { HasRoleDirective } from './directives/has-role.directive';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {Ng2SearchPipeModule} from 'ng2-search-filter';
@NgModule({
  declarations: [AppComponent, 
   // HasRoleDirective
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,Ng2SearchPipeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },FormsModule,CommonModule,ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
