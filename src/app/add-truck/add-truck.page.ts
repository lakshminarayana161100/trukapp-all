import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-add-truck',
  templateUrl: './add-truck.page.html',
  styleUrls: ['./add-truck.page.scss'],
})
export class AddTruckPage implements OnInit {

  toppings: any;
  trukname: any;
  dropdownList: any[] = [];
  trukoperatingRoutes: any = [];
  dropdownSettings!: IDropdownSettings;
  trukvehiclenumber: any;
  trukcurrentLocation: any;
  trukcapacity: any;
  Items: any;
  trukdate: any;

  trukOwnerNumber:any

  constructor(private alertController: AlertController,public loadingController: LoadingController) { }

  ngOnInit() {

    this.dropdownList = [
      'Amaravati', 
      'Itanagar',
      'Dispur',
      'Patna',
      'Raipur',
      'Panaji',
      'Gandhinagar',
      'Chandigarh',
      'Shimla',
      'Ranchi',
      'Bangaluru',
      'Thiruvananthapuram',
      'Bhopal',
      'mumbai',
      'Imphal',
      'Shillong',
      'Aizawl',
      'Kohima',
      'Bhubaneswar',
      'Chandigarh',
      'Jaipur',
      'Gangtok',
      'Chennai',
      'Hyderabad',
      'Agartala',
      'Lucknow',
      'Kolkata',
      'delhi',
      'Pune',
    ];
    this.trukoperatingRoutes = [

    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }


  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  out(trukname: any) {
    console.log(trukname)

    this.trukname = trukname
    console.log(this.trukname)

  }

  async postVehile() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'crescent'
    });
    await loading.present();
    var body = {
      trukvehiclenumber: this.trukvehiclenumber,
      trukcapacity: this.trukcapacity,
      trukcurrentLocation: this.trukcurrentLocation,
      trukoperatingRoutes: this.trukoperatingRoutes,
      trukname: this.trukname,
      trukdate: this.trukdate,
      trukOwnerNumber:this.trukOwnerNumber
    }
    console.log()
    fetch("https://amused-crow-cowboy-hat.cyclic.app/addTruk/vehiclepost", {
      method: 'post',
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(body),

    })
      .then(response => response.json())
      .then(async result => {
        console.log(result)
        this.Items = result
        loading.dismiss()
        const alert = await this.alertController.create({
          header: 'Successfull',
          // subHeader: 'Important message',
          message: 'truk posted Successfully',
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                console.log('Confirm Okay');
                //you can write your code or redirection 
                // sample redirection code 
                window.location.href = '/your-truck-posted';

              }
            }
          ],
        });

        await alert.present();


      }

      ).catch(err =>
        console.log(err))
        loading.dismiss()
  }
}