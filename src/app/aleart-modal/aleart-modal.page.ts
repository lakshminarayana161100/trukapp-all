import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aleart-modal',
  templateUrl: './aleart-modal.page.html',
  styleUrls: ['./aleart-modal.page.scss'],
})
export class AleartModalPage implements OnInit {
  
@Input()message:any
  constructor() { }

  ngOnInit() {
  }

}
