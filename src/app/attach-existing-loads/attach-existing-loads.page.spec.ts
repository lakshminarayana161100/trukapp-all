import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttachExistingLoadsPage } from './attach-existing-loads.page';

describe('AttachExistingLoadsPage', () => {
  let component: AttachExistingLoadsPage;
  let fixture: ComponentFixture<AttachExistingLoadsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachExistingLoadsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttachExistingLoadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
