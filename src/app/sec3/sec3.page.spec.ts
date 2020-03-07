import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sec3Page } from './sec3.page';

describe('Sec3Page', () => {
  let component: Sec3Page;
  let fixture: ComponentFixture<Sec3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sec3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
