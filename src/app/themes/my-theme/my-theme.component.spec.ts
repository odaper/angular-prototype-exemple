import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyThemeComponent } from './my-theme.component';

describe('VermegThemeComponent', () => {
  let component: MyThemeComponent;
  let fixture: ComponentFixture<MyThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
