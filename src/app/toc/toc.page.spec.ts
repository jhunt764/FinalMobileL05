import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TOCPage } from './toc.page';

describe('TOCPage', () => {
  let component: TOCPage;
  let fixture: ComponentFixture<TOCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TOCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TOCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
