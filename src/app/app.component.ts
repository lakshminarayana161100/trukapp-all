import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
//import { OneSignal } from '@ionic-native/onesignal';
import OneSignal from 'onesignal-cordova-plugin';
//import {OneSignal} from '@ionic-native/onesignal'
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  notificationToken: any;
  UniqueDeviceID!:string;
  logindata: any;
  constructor(private platform: Platform,private uniqueDeviceID: UniqueDeviceID) {
//this. getUniqueDeviceID()
    platform.ready().then(() => {
      this.OneSignalInit();
    });

//this.getUniqueDeviceID()
  }
  ngOnInit(): void {
    this.logindata =JSON.parse(localStorage.getItem('regdata') || '{}')
    
  }
  darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
  }
  getUniqueDeviceID() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        console.log(uuid);
        this.UniqueDeviceID = uuid;

        //alert(this.UniqueDeviceID)
      })
      .catch((error: any) => {
        console.log(error);
        this.UniqueDeviceID = "Error! ${error}";
      });
  }

  // Call this function when your app starts
 OneSignalInit(): void {
  // Uncomment to set OneSignal device logging to VERBOSE  
  // OneSignal.setLogLevel(6, 0);

  // NOTE: Update the setAppId value below with your OneSignal AppId.
  OneSignal.setAppId("79da642e-49a6-4af9-8e6e-252680709d15");
  OneSignal.setNotificationOpenedHandler(function(jsonData: any) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  });

  // Prompts the user for notification permissions.
  //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
  OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
      console.log("User accepted notifications: " + accepted);
  });

OneSignal.setExternalUserId(this.UniqueDeviceID ,(result)=>{
  console.log(result)
  //alert(JSON.stringify(result))
})

  // TO-DO : get details from configuration
  /*OneSignal.startInit("913bcc8c-f580-44fb-94e5-1e5f97a80546", "ZTk0Y2I0NmEtMTVmZC00MDJjLTljYjYtOTNjYWYyZTBjODlh");
  OneSignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);
  OneSignal.handleNotificationReceived().subscribe((data:any) => {
      // do something when notification is received
      console.log("notification received");
      console.log(data);  
  });*/


/* OneSignal.endInit();
OneSignal.getIds().then((id: { userId: any; }) => {
      console.log("one signal player ID :- ");
      console.log(id.userId);
alert(id.userId)
      this.notificationToken = id.userId;
      //this.getStoreDetails();
  });*/

}

signout(){
  localStorage.removeItem('regdata')
  window.location.href='/loginotp'
}

}
