import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBeverageComponent } from './select-beverage.component';

describe('SelectBeverageComponent', () => {
  let component: SelectBeverageComponent;
  let fixture: ComponentFixture<SelectBeverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBeverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
