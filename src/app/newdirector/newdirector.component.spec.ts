import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdirectorComponent } from './newdirector.component';

describe('NewdirectorComponent', () => {
  let component: NewdirectorComponent;
  let fixture: ComponentFixture<NewdirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdirectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewdirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
