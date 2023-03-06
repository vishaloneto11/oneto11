import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdheaderComponent } from './udheader.component';

describe('UdheaderComponent', () => {
  let component: UdheaderComponent;
  let fixture: ComponentFixture<UdheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
