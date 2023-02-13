import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  item: any = [];

  filter: any
  categories = ['LCV', 'Truk', 'Hyva', 'container', 'Tanker'];
  lcv = false;
  truck = false;
  hyva = false;
  container = false;
  tanker = false;
  trailer = false;
  vehiclenumber: any;
  capacity: any;
  data: any;
  currentLocation: any;
  selectedItems: any;
  items: any = [];

  dropLocation: any;
  pickupLocation: any;

  dropdownList: any[] = [];
  operatingRoutes: any = [];
  dropdownSettings!: IDropdownSettings;

  constructor() { }

  ngOnInit() {

    this.get()


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

  onCategoryChange(category: any) {
    console.log(category)

  }


  toggle(data: any) {
    this.filter = data
    this.get()
    console.log(data)
  }

  get() {
    console.log(this.filter)
    fetch("http://localhost:3000/addTruk/filterByVehicle/" + this.filter + "/"+this.pickupLocation +"/"+this.dropLocation, {
      method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",

      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.item = result.vehicle

        console.log(this.item)

      }

      ).catch(err =>
        console.log(err))
  }
  //vehileSearch based on routes
  vehicleSearch() {
    var data = {
      dropLocation: this.dropLocation,
      pickupLocation: this.pickupLocation
    }

    fetch("http://localhost:3000/addTruk/vehicleSearch", {
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
          this.items = result.doc
        // this.testForms.reset();

      }

      ).catch(err =>
        console.log(err))

  }


}
