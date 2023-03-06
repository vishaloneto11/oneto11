import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdthreeComponent } from './udthree.component';

describe('UdthreeComponent', () => {
  let component: UdthreeComponent;
  let fixture: ComponentFixture<UdthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdthreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
