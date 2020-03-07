import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sec5Page } from './sec5.page';

describe('Sec5Page', () => {
  let component: Sec5Page;
  let fixture: ComponentFixture<Sec5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sec5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
