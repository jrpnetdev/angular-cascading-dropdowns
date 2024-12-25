import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDropdownComponent } from './child-dropdown.component';

describe('ChildDropdownComponent', () => {
  let component: ChildDropdownComponent;
  let fixture: ComponentFixture<ChildDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
