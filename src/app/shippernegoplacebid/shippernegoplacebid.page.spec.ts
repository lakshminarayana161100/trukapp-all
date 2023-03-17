import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShippernegoplacebidPage } from './shippernegoplacebid.page';

describe('ShippernegoplacebidPage', () => {
  let component: ShippernegoplacebidPage;
  let fixture: ComponentFixture<ShippernegoplacebidPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippernegoplacebidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShippernegoplacebidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
