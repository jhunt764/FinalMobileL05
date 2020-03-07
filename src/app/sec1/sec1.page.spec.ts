import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sec1Page } from './sec1.page';

describe('Sec1Page', () => {
  let component: Sec1Page;
  let fixture: ComponentFixture<Sec1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sec1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
