import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravesmediaComponent } from './travesmedia.component';

describe('TravesmediaComponent', () => {
  let component: TravesmediaComponent;
  let fixture: ComponentFixture<TravesmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravesmediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravesmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
