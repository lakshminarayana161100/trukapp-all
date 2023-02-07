import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/loadingscreen',
    pathMatch: 'full'
  },
  {
    path: 'tab',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'loginotp',
    loadChildren: () => import('./loginotp/loginotp.module').then( m => m.LoginotpPageModule)
  },
  {
    path: 'verifyotp',
    loadChildren: () => import('./verifyotp/verifyotp.module').then( m => m.VerifyotpPageModule)
  },

  {
    path: 'selectlanguage',
    loadChildren: () => import('./selectlanguage/selectlanguage.module').then( m => m.SelectlanguagePageModule)
  },
  {
    path: 'selecttype',
    loadChildren: () => import('./selecttype/selecttype.module').then( m => m.SelecttypePageModule)
  },
  {
    path: 'personorcompanydetails',
    loadChildren: () => import('./personorcompanydetails/personorcompanydetails.module').then( m => m.PersonorcompanydetailsPageModule)
  },
  {
    path: 'loadingscreen',
    loadChildren: () => import('./loadingscreen/loadingscreen.module').then( m => m.LoadingscreenPageModule)
  },

  {
    path: 'attach-new-load',
    loadChildren: () => import('./attach-new-load/attach-new-load.module').then( m => m.AttachNewLoadPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'addaddress',
    loadChildren: () => import('./addaddress/addaddress.module').then( m => m.AddaddressPageModule)
  },
  {
    path: 'editalldetails',
    loadChildren: () => import('./editalldetails/editalldetails.module').then( m => m.EditalldetailsPageModule)
  },
  {
    path: 'vrifyaadharotp',
    loadChildren: () => import('./verifyaadharotp/vrifyaadharotp.module').then( m => m.VrifyaadharotpPageModule)
  },
  {
    path: 'verifygstotp',
    loadChildren: () => import('./verifygstotp/verifygstotp.module').then( m => m.VerifygstotpPageModule)
  },
  {
    path: 'shipperhome',
    loadChildren: () => import('./shipperhome/shipperhome.module').then( m => m.ShipperhomePageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
