import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdfiveComponent } from './udfive.component';

describe('UdfiveComponent', () => {
  let component: UdfiveComponent;
  let fixture: ComponentFixture<UdfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdfiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
