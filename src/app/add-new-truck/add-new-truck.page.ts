import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-add-new-truck',
  templateUrl: './add-new-truck.page.html',
  styleUrls: ['./add-new-truck.page.scss'],
})
export class AddNewTruckPage implements OnInit {

  toppings: any;
  data: any;
  dropdownList: any[] = [];
  selectedItems: any = [];
  dropdownSettings!: IDropdownSettings;
  vehiclenumber: any;
  currentLocation: any;
  capacity: any;
  Items: any;
  date: any;

  constructor() { }

  ngOnInit() {
  }

}
