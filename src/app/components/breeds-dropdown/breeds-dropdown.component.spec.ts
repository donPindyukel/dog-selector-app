import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsDropdownComponent } from './breeds-dropdown.component';

describe('BreedsDropdownComponent', () => {
  let component: BreedsDropdownComponent;
  let fixture: ComponentFixture<BreedsDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedsDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
