import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonssComponent } from './buttonss.component';

describe('ButtonssComponent', () => {
  let component: ButtonssComponent;
  let fixture: ComponentFixture<ButtonssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
