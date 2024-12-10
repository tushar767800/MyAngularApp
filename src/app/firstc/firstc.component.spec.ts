import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcComponent } from './firstc.component';

describe('FirstcComponent', () => {
  let component: FirstcComponent;
  let fixture: ComponentFixture<FirstcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
