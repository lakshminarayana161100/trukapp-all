import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-add-new-truck-details',
  templateUrl: './add-new-truck-details.page.html',
  styleUrls: ['./add-new-truck-details.page.scss'],
})
export class AddNewTruckDetailsPage implements OnInit {

  toppings: any;
  data: any;
  dropdownList: any[] = [];
  operatingRoutes: any = [];
  dropdownSettings!: IDropdownSettings;
  vehicleNo: any;
  vehicleCurrentLocation: any;
  vehicleCapacity: any;
  Items: any;
  date: any;
  DriverName: any;
  DriverNumber: any;
  vehicleType:any;
 _id: any;

  constructor() { }

  ngOnInit() {


    this.dropdownList = [
      'Mumbai',
      'Bangaluru',
      'Pune',
      'Navsari',
      'New Delhi'
    ];
    this.operatingRoutes = [

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

  out(data: any) {
    console.log(data)

    this.vehicleType = data
    // console.log(this.data)

  }
  NewPostAdd() {


    var data = {
      operatingRoutes: this.operatingRoutes,
      vehicleType: this.vehicleType,
      vehicleNo: this.vehicleNo,
      vehicleCurrentLocation: this.vehicleCurrentLocation,
      vehicleCapacity: this.vehicleCapacity,
      date: this.date,
      DriverName: this.DriverName,
      DriverNumber: this.DriverNumber,
      _id:"63e4cbb10c1e2c6d00db2738"
    }
    console.log(data)
    localStorage.setItem("newpostAdd", JSON.stringify(data));

    fetch("https://amused-crow-cowboy-hat.cyclic.app/quotes/attachVehicleToLoad", {
      method: 'post',
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data),

    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.Items = result     
       

      }

      ).catch(err =>
        console.log(err))
  }

}
