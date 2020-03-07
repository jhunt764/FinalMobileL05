import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Section6Page } from './section6.page';

describe('Section6Page', () => {
  let component: Section6Page;
  let fixture: ComponentFixture<Section6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Section6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
