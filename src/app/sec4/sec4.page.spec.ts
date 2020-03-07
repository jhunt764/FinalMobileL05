import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sec4Page } from './sec4.page';

describe('Sec4Page', () => {
  let component: Sec4Page;
  let fixture: ComponentFixture<Sec4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sec4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
