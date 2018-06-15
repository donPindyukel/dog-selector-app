import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogSelectorContainerComponent } from './dog-selector-container.component';

describe('DogSelectorContainerComponent', () => {
  let component: DogSelectorContainerComponent;
  let fixture: ComponentFixture<DogSelectorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogSelectorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogSelectorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
