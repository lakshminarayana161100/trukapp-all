import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttachPrefferdNewloadPage } from './attach-prefferd-newload.page';

describe('AttachPrefferdNewloadPage', () => {
  let component: AttachPrefferdNewloadPage;
  let fixture: ComponentFixture<AttachPrefferdNewloadPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachPrefferdNewloadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttachPrefferdNewloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
